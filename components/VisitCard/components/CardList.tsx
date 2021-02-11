import { useEffect, useState } from "react"

import { listVisitCards } from "../utils";

import styles from '../visitCard.module.css'

interface CardListProps {
    onClose: () => void;
    onSelect: (val: string) => void;
    isDisplayed?: boolean;
}

export default function CardList({ onSelect, isDisplayed = false, onClose }: CardListProps) {
    const [list, setList] = useState<Array<string>>([]);

    useEffect(() => {
        setList(listVisitCards());
    }, [isDisplayed]);

    return (
        <div className={styles.popupContainer} onClick={(e) => e.target === e.currentTarget && onClose()}>
            <div className={styles.visitCardList}>
                <div>{list && list.length ? 'Saved visitCards:' : 'There are no saved visit cards'}</div>
                {list.map((name, idx) => <div key={idx} className={styles.visitCardLoad} onClick={() => onSelect(name)}>{name}</div>)}
            </div>
        </div>
    )
}