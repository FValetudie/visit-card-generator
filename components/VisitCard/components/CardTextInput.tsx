import React from 'react';

import { useCardContext } from '../CardContext';

import ColorPicker from '../../ColorPicker/ColorPicker';
import { IFontStyles } from '../interfaces/ICardContext';

interface CardTextInputProps {
  label: string;
  name: keyof IFontStyles;
}

export default function CardTextInput({ label, name }: CardTextInputProps) {
  const { data, fontStyles, updateData, setFontStyles } = useCardContext();

  return (
    <div>
      <label htmlFor={name}>{label}</label>{' '}
      <ColorPicker
        color={fontStyles?.[name]?.color}
        onChange={(color) =>
          setFontStyles({
            ...fontStyles,
            [name]: { ...fontStyles?.[name], color },
          })
        }
      />
      <input
        value={data?.[name]}
        name={name}
        type="text"
        onChange={(e) => updateData({ [name]: e.target.value })}
      />
    </div>
  );
}
