
import React from "react";

import { CardContextProvider } from './CardContext';
import CardPreview from './CardPreview';
import CardSettings from './CardSettings';

import styles from './visitCard.module.css'

interface VisitCardProps {
    displayOnly?: boolean;
    visitCard?: string;
}

export default function VisitCard({ displayOnly = false, visitCard }: VisitCardProps) {
    return (
        <div className={styles.cardContainer}>
            <CardContextProvider>
                <CardPreview visitCard={visitCard} />
                {!displayOnly && <CardSettings />}
            </CardContextProvider>
        </div>
    );
}