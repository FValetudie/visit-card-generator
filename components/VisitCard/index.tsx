
import React from "react";

import { CardContextProvider } from './CardContext';
import CardPreview from './CardPreview';
import CardSettings from './CardSettings';

import styles from './visitCard.module.css'


export default function VisitCard() {
    return (
        <div className={styles.cardContainer}>
            <CardContextProvider>
                <CardPreview />
                <CardSettings />
            </CardContextProvider>
        </div>
    );
}