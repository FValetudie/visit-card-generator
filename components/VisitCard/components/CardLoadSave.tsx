import React, { useCallback, useRef, useState } from "react";
import { Restore, Save } from "@material-ui/icons";
import { useToasts } from "react-toast-notifications";

import { loadVisitCard, saveVisitCard } from "../utils";
import { useCardContext } from "../CardContext";
import CardList from "./CardList";

import styles from "../visitCard.module.css";

export default function CardLoadSave() {
  const visitCardNameRef = useRef<HTMLInputElement>(null);
  const [displayVisitCardList, setDisplayVisitCardList] = useState<boolean>(
    false
  );
  const visitCardCtx = useCardContext();
  const { addToast } = useToasts();

  const toggleVisitCardList = useCallback(() => {
    setDisplayVisitCardList(!displayVisitCardList);
  }, [displayVisitCardList]);

  const handleSave = useCallback(() => {
    const vcName = visitCardNameRef?.current?.value;
    if (vcName) {
      saveVisitCard(vcName, visitCardCtx);
      addToast("Visit card saved", { appearance: "success" });
    } else {
      addToast("Visit card name mandatory to save a visit card", {
        appearance: "error",
      });
    }
  }, [visitCardNameRef, visitCardCtx]);

  const handleLoad = useCallback(
    (vcName) => {
      if (vcName) {
        try {
          loadVisitCard(vcName, visitCardCtx);
          setDisplayVisitCardList(false);
          if (visitCardNameRef?.current) {
            visitCardNameRef.current.value = vcName;
          }
          addToast("Visit card loaded", { appearance: "success" });
        } catch (e) {
          addToast(e, { appearance: "error" });
        }
      } else {
        addToast("Please choose a valid visit card to load", {
          appearance: "error",
        });
      }
    },
    [visitCardCtx, visitCardNameRef]
  );

  return (
    <div className={styles.cardLoadSave}>
      <h2>Miscellaneous</h2>
      <div className="half">
        <input
          ref={visitCardNameRef}
          type="text"
          name="visitCardName"
          placeholder="Visit card name"
        />
      </div>
      <div className="half">
        <button onClick={handleSave}>
          <Save fontSize="inherit" /> Save visit card
        </button>
      </div>
      <div className="half">
        <button onClick={toggleVisitCardList}>
          <Restore fontSize="inherit" /> Load a visit card
        </button>
      </div>
      {displayVisitCardList && (
        <CardList
          onClose={toggleVisitCardList}
          onSelect={handleLoad}
          isDisplayed={displayVisitCardList}
        />
      )}
    </div>
  );
}
