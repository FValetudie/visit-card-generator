import React, { createContext, ReactNode, useCallback, useContext, useMemo, useState } from "react";

import { ICardContext, IFontStyles } from "./interfaces/ICardContext";
import { ICardStyle } from "./interfaces/ICardStyle";
import { ICardPersonalData } from "./interfaces/ICardPersonalData";

import { defaultBgColor, defaultFontStyle, defaultHeight, defaultWidth } from "./constants/defaults";

const CardContext = createContext<ICardContext | null>(null);

export const useCardContext = () => {
    const ctx = useContext(CardContext);

    if (!ctx) {
        throw new Error('Missing context');
    }
    return ctx;
}

export function CardContextProvider({ children }: { children: ReactNode }) {
    const [isGradient, setIsGradient] = useState(false);
    const [gradientAngle, setGradientAngle] = useState(0);
    const [data, setData] = useState<ICardPersonalData>({});
    const [isSettingsOpen, setIsOpenSettings] = useState(false);
    const [logo, setLogo] = useState('');
    const [style, setStyle] = useState<ICardStyle>({
        height: defaultHeight,
        width: defaultWidth,
        bgColor1: defaultBgColor,
    });
    const [fontStyles, setFontStyles] = useState<IFontStyles>({
        email: defaultFontStyle, fname: defaultFontStyle, lname: defaultFontStyle, phone: defaultFontStyle,
        twitter: defaultFontStyle, company: { color: '#a00' }, position: defaultFontStyle,
    });

    const computedStyle = useMemo(() => {
        const background = isGradient && style.bgColor2
            ? `linear-gradient(${gradientAngle}deg, ${style.bgColor1} 0%, ${style.bgColor2} 100%)`
            : style.bgColor1;
        const width = Math.min(style.width, window.innerWidth - 20);
        const height = width * (style.height / style.width);
        return { height, width, background };
    }, [isGradient, style, gradientAngle]);

    const toggleIsSettingOpen = useCallback(() => {
        setIsOpenSettings(!isSettingsOpen);
    }, [isSettingsOpen]);

    const updateStyle = useCallback((newData) => {
        setStyle({ ...style, ...newData });
    }, [setStyle, style]);

    const updateData = useCallback((newData) => {
        setData({ ...data, ...newData });
    }, [setData, data]);

    const value= {
        data,

        gradientAngle,
        isGradient,
        isSettingsOpen,
        toggleIsSettingOpen,

        logo,
        style,
        computedStyle,
        fontStyles,

        updateData,

        setLogo,
        updateStyle,
        setFontStyles,
        setIsGradient,
        setGradientAngle,
    };

    return <CardContext.Provider value={value}>{children}</CardContext.Provider>
}
