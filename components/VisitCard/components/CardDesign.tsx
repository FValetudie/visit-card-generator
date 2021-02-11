import React, { useCallback, useRef } from "react";

import { useCardContext } from "../CardContext";

import ColorPicker from "../../ColorPicker/ColorPicker";

export default function CardDesign() {
    const isGradientRef = useRef<HTMLInputElement>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);
    const {
        style,
        isGradient,
        gradientAngle,
        setIsGradient,
        setGradientAngle,
        updateStyle,
        setLogo,
    } = useCardContext();

    const handleGradientChange = useCallback(() => {
        setIsGradient(isGradientRef.current?.checked ?? false);
    }, [setIsGradient, isGradient]);

    const handleChangeLogo = useCallback(() => {
        const files = fileInputRef?.current?.files;
        if (files && files.length > 0) {
            const file = files[0];
            const reader = new FileReader();
            reader.addEventListener('load', (e) => {
                if (typeof e?.target?.result === 'string') {
                    setLogo(e?.target?.result);
                }
            });
            reader.readAsDataURL(file);
        }
    }, [fileInputRef]);

    return (
        <div className="card-style">
            <p>
                <label htmlFor="cardHeight">Height</label>
                <input  value={style.height} name="cardHeight" type="number" onChange={(e) => updateStyle({ height: Number(e.target.value) })} />
            </p>
            <p>
                <label htmlFor="cardWidth">Width</label>
                <input value={style.width} name="cardWidth" type="number" onChange={(e) => updateStyle({ width: Number(e.target.value) })} />
            </p>
            <p>
                <label>Logo</label>
                <input type="file" accept=".png,.jpg" ref={fileInputRef} onChange={handleChangeLogo} />
            </p>
            <p>
                <label>Gradient</label>{' '}
                <input ref={isGradientRef} checked={isGradient} type="checkbox" onChange={() => handleGradientChange()} />{' '}
                <input type="number" max={360} min={0} value={gradientAngle} onChange={(e) => setGradientAngle(Number(e.target.value))} />
            </p>
            <div>
                <label>{isGradient ? 'From' : 'Background color'}</label>{' '}
                <ColorPicker
                    color={style.bgColor1}
                    onChange={(bgColor1) => updateStyle({ bgColor1 })}
                />
                {isGradient && <label> to </label>}
                {isGradient && <ColorPicker
                    color={style.bgColor2}
                    onChange={(bgColor2) => updateStyle({ bgColor2 })}
                />}
            </div>
        </div>
    );
};