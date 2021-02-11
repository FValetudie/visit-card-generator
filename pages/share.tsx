import React, { useEffect, useState } from 'react'

import VisitCard from '../components/VisitCard';

export default function CreateVisitCard() {
    const [visitCard, setVisitCard] = useState<string>();

    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        const visitCardData = params.get('visitCard');

        if (visitCardData) {
            setVisitCard(visitCardData);
        }
    }, []);
    
    return (
        <VisitCard displayOnly={true} visitCard={visitCard} />
    );
};