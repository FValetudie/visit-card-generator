import React, { useCallback, useRef, useState } from "react";
import cn from "classnames";
import { Restore, Save, Settings, Share } from "@material-ui/icons";

import styles from './visitCard.module.css'
import { useCardContext } from "./CardContext";
import ColorPicker from "../ColorPicker/ColorPicker";
import { loadVisitCard, saveVisitCard, visitCardShareLink } from "./utils";
import CardList from "./CardList";

export default function CardSettings() {
    const isGradientRef = useRef<HTMLInputElement>(null);
    const visitCardNameRef = useRef<HTMLInputElement>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);
    const [displayVisitCardList, setDisplayVisitCardList] = useState<boolean>(false);
    const visitCardCtx = useCardContext();
    const {
        data,
        style,
        fontStyles,
        isSettingsOpen,
        isGradient,
        gradientAngle,
        updateData,
        setIsGradient,
        setGradientAngle,
        toggleIsSettingOpen,
        updateStyle,
        setFontStyles,
        setLogo,
    } = visitCardCtx;

    const handleGradientChange = useCallback(() => {
        setIsGradient(isGradientRef.current?.checked ?? false);
    }, [setIsGradient, isGradient]);

    const handleSave = useCallback(() => {
        const vcName = visitCardNameRef?.current?.value;
        if (vcName) {
            saveVisitCard(vcName, visitCardCtx);
        }
    }, [visitCardNameRef, visitCardCtx]);

    const handleLoad = useCallback((vcName) => {
        if (vcName) {
            loadVisitCard(vcName, visitCardCtx);
            setDisplayVisitCardList(false);
            if (visitCardNameRef?.current) {
                visitCardNameRef.current.value = vcName;
            }
        }
    }, [visitCardCtx, visitCardNameRef]);

    const toggleVisitCardList = useCallback(() => {
        setDisplayVisitCardList(!displayVisitCardList);
    }, [displayVisitCardList]);

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

    const handleShare = useCallback(async () => {
        const shareUrl = visitCardShareLink(visitCardCtx);
        await navigator.clipboard.writeText(shareUrl);
        console.log(`Copied to clipboard: ${shareUrl}`);
    }, [visitCardCtx]);

    // useEffect(() => {
    //     console.info('Setting up autosave');
    //     loadVisitCard('visitCard_last', visitCardCtx);

    //     setInterval(() => saveVisitCard('visitCard_last', visitCardCtx), 10000);
    // }, []);

    return (
        <div className={cn(styles.cardSettings, { [styles.open]: isSettingsOpen })}>
            <span className={styles.toggleSettings} onClick={toggleIsSettingOpen}>
                <Settings fontSize="large" />
            </span>
            <div>
                <div className="card-personal-data">
                    <div>
                        <label htmlFor="firstname">Firstname</label>{' '}
                        <ColorPicker
                            color={fontStyles?.fname?.color}
                            onChange={(color) => setFontStyles({ ...fontStyles, fname: { ...fontStyles?.fname, color }})}
                        />
                        <input value={data?.firstname} name="firstname" type="text" onChange={(e) => updateData({ firstname: e.target.value }) } />
                    </div>
                    <div>
                        <label htmlFor="lastname">Lastname</label>{' '}
                        <ColorPicker
                            color={fontStyles?.lname?.color}
                            onChange={(color) => setFontStyles({ ...fontStyles, lname: { ...fontStyles?.lname, color }})}
                        />
                        <input value={data?.lastname} name="lastname" type="text" onChange={(e) => updateData({ lastname: e.target.value }) } />
                    </div>
                    <div>
                        <label htmlFor="position">Position</label>{' '}
                        <ColorPicker
                            color={fontStyles?.position?.color}
                            onChange={(color) => setFontStyles({ ...fontStyles, position: { ...fontStyles?.position, color }})}
                        />
                        <input value={data?.position} name="position" type="text" onChange={(e) => updateData({ position: e.target.value }) } />
                    </div>
                    <div>
                        <label htmlFor="company">Company</label>{' '}
                        <ColorPicker
                            color={fontStyles?.company?.color}
                            onChange={(color) => setFontStyles({ ...fontStyles, company: { ...fontStyles?.company, color }})}
                        />
                        <input value={data?.company} name="company" type="text" onChange={(e) => updateData({ company: e.target.value }) } />
                    </div>
                    <div>
                        <label htmlFor="email">Email</label>{' '}
                        <ColorPicker
                            color={fontStyles?.email?.color}
                            onChange={(color) => setFontStyles({ ...fontStyles, email: { ...fontStyles?.email, color }})}
                        />
                        <input value={data?.email} name="email" type="email" onChange={(e) => updateData({ email: e.target.value }) } />
                    </div>
                    <div>
                        <label htmlFor="twitter">Twitter handle</label>{' '}
                        <ColorPicker
                            color={fontStyles?.twitter?.color}
                            onChange={(color) => setFontStyles({ ...fontStyles, twitter: { ...fontStyles?.twitter, color }})}
                        />
                        <input value={data?.twitter} name="twitter" type="text" onChange={(e) => updateData({ twitter: e.target.value }) } />
                    </div>
                    <div>
                        <label htmlFor="phone">Phone number</label>{' '}
                        <ColorPicker
                            color={fontStyles?.phone?.color}
                            onChange={(color) => setFontStyles({ ...fontStyles, phone: { ...fontStyles?.phone, color }})}
                        />
                        <input value={data?.phone} name="phone" type="phone" onChange={(e) => updateData({ phone: e.target.value }) } />
                    </div>
                </div>
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
                <div className={styles.cardLoadSave}>
                    <div className="half"><input ref={visitCardNameRef} type="text" name="visitCardName" placeholder="Visit card name" /></div>
                    <div className="half"><button onClick={handleSave}><Save fontSize="inherit" /> Save visit card</button></div>
                    <div className="half"><button onClick={toggleVisitCardList}><Restore fontSize="inherit" /> Load a visit card</button></div>
                    {displayVisitCardList && <CardList onClose={toggleVisitCardList} onSelect={handleLoad} isDisplayed={displayVisitCardList} />}
                </div>
                <div><button onClick={handleShare}><Share fontSize="inherit" /> Share</button></div>
            </div>
        </div>
    )
}