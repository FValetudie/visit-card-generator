import React, { useEffect, useState } from 'react'

import VisitCard from '../components/VisitCard';

export default function CreateVisitCard() {
    const [visitCard, setVisitCard] = useState<string>();
    const [displayOnly, setDisplayOnly] = useState<boolean>(false);

    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        const visitCardData = params.get('visitCard');
        const isShare = params.get('share');

        setDisplayOnly((isShare ?? undefined) === '1');
        if (visitCardData) {
            setVisitCard(visitCardData);
        }
    }, []);
    
    return (
        <VisitCard displayOnly={displayOnly} visitCard={visitCard} />
    );
};