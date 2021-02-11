import React, { Fragment, useCallback, useRef } from "react";

import { useCardContext } from "../CardContext";

import ColorPicker from "../../ColorPicker/ColorPicker";
import { Delete } from "@material-ui/icons";

export default function CardDesign() {
    const isGradientRef = useRef<HTMLInputElement>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);
    const {
        logo,
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
            <h2>Visit card design</h2>
            <div>
                <label>Logo</label>
                {logo ? (
                    <Fragment>
                        <br />
                        <img src={logo} width={30} title="logo" />
                        <Delete fontSize="inherit" style={{ cursor: 'pointer' }} onClick={() => setLogo('')} />
                    </Fragment>
                ) : (
                    <input type="file" accept=".png,.jpg" ref={fileInputRef} onChange={handleChangeLogo} />
                )}
            </div>
            <div className="half">
                <label htmlFor="cardHeight">Height</label>
                <input  value={style.height} name="cardHeight" type="number" onChange={(e) => updateStyle({ height: Number(e.target.value) })} />
            </div>
            <div className="half">
                <label htmlFor="cardWidth">Width</label>
                <input value={style.width} name="cardWidth" type="number" onChange={(e) => updateStyle({ width: Number(e.target.value) })} />
            </div>
            <h3>Background</h3>
            <div>
                <label>{isGradient ? 'From' : 'Color'}</label>{' '}
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
            <div>
                <label>Use a gradient</label>{' '}
                <input ref={isGradientRef} checked={isGradient} type="checkbox" onChange={() => handleGradientChange()} />{' '}
                {isGradient && (
                    <div>
                        <div className="half"><label>Gradient angle</label></div>
                        <div className="half">
                            <input type="number" max={360} min={0} value={gradientAngle} onChange={(e) => setGradientAngle(Number(e.target.value))} />
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};