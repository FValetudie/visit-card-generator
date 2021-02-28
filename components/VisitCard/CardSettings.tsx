import React, { useCallback } from 'react';
import cn from 'classnames';
import { Settings, Share } from '@material-ui/icons';
import { useToasts } from 'react-toast-notifications';

import { useCardContext } from './CardContext';
import { visitCardShareLink } from './utils';
import CardLoadSave from './components/CardLoadSave';
import CardDesign from './components/CardDesign';
import CardPersonalData from './components/CardPersonalData';

import styles from './visitCard.module.css';

export default function CardSettings() {
  const { addToast } = useToasts();
  const visitCardCtx = useCardContext();
  const { isSettingsOpen, toggleIsSettingOpen } = visitCardCtx;

  const handleShare = useCallback(async () => {
    const shareUrl = visitCardShareLink(visitCardCtx, window.location.origin);
    await navigator.clipboard.writeText(shareUrl);
    addToast('Share link saved to clipboard', { appearance: 'info' });
  }, [visitCardCtx]);

  return (
    <div className={cn(styles.cardSettings, { [styles.open]: isSettingsOpen })}>
      <span className={styles.toggleSettings} onClick={toggleIsSettingOpen}>
        <Settings fontSize="large" />
      </span>
      <div>
        <CardPersonalData />
        <CardDesign />
        <CardLoadSave />
        <div>
          <button onClick={handleShare}>
            <Share fontSize="inherit" /> Share
          </button>
        </div>
      </div>
    </div>
  );
}
