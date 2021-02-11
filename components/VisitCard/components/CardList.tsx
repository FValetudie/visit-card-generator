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
    const [filter, setFilter] = useState<string>('');

    useEffect(() => {
        setList(listVisitCards());
    }, [isDisplayed]);

    return (
        <div className={styles.popupContainer} onClick={(e) => e.target === e.currentTarget && onClose()}>
            <div className={styles.visitCardList}>
                {list && list.length ? (
                    <div>
                        <p>{`There are ${list.length} visit card, click on the one you wish to load`}</p>
                        <p><label>Filter by name: </label><input name="filter" type="text" onChange={(e) => setFilter(e.target.value.toLowerCase())} /></p>
                    </div>
                ) : (
                    <div>There are no saved visit cards</div>
                )}
                {list
                    .filter(n => !filter || n.toLowerCase().startsWith(filter))
                    .map((name, idx) => (
                        <div key={idx} className={styles.visitCardLoad} onClick={() => onSelect(name)}>{name}</div>
                    ))
                }
            </div>
        </div>
    )
}