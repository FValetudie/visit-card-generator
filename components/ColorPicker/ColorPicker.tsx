import { CSSProperties } from '@material-ui/core/styles/withStyles';
import React, { useCallback, useState } from 'react'
import { ChromePicker } from 'react-color'

import styles from './ColorPicker.module.css'

type TColorPrickerProps = {
  color?: string;
  onChange: (val: string) => void;
}

function ColorPicker({ color, onChange }: TColorPrickerProps) {
  const [displayColorPicker, setDisplayColorPicker] = useState(false);

  const toggleDisplayColorPicker = useCallback(() => {
    setDisplayColorPicker(!displayColorPicker);
  }, [displayColorPicker]);

  const cover: CSSProperties = {
    position: 'fixed',
    top: '0px',
    right: '0px',
    bottom: '0px',
    left: '0px',
  }

  return (
    <span style={{ backgroundColor: color }} className={styles.colorPickerContainer} onClick={(e) => e.target === e.currentTarget && toggleDisplayColorPicker()}>
      {displayColorPicker && <span style={cover} onClick={(e) => e.target === e.currentTarget && toggleDisplayColorPicker()}/>}
      {displayColorPicker && <span className={styles.colorPicker}><ChromePicker color={color} onChange={(c) => onChange(c.hex)} disableAlpha /></span>}
    </span>
  );
}

export default ColorPicker