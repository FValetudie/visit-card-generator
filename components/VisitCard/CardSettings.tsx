import React, { useCallback } from "react";
import cn from "classnames";
import { Settings, Share } from "@material-ui/icons";

import { useCardContext } from "./CardContext";
import { visitCardShareLink } from "./utils";
import CardLoadSave from "./components/CardLoadSave";
import CardDesign from "./components/CardDesign";
import CardPersonalData from "./components/CardPersonalData";

import styles from './visitCard.module.css'

export default function CardSettings() {
    const visitCardCtx = useCardContext();
    const {
        isSettingsOpen,
        toggleIsSettingOpen,
    } = visitCardCtx;

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
                <CardPersonalData />
                <CardDesign />
                <CardLoadSave />
                <div><button onClick={handleShare}><Share fontSize="inherit" /> Share</button></div>
            </div>
        </div>
    )
}