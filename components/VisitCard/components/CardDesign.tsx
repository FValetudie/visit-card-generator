import React, { useCallback } from 'react'

import { useCardContext } from '../CardContext'

import ColorPicker from '../../ColorPicker/ColorPicker'
import CardLogoInput from './CardLogoInput'
import CardIntegerInput from './CardIntegerInput'

export default function CardDesign() {
  const {
    style,
    isGradient,
    gradientAngle,
    setIsGradient,
    setGradientAngle,
    updateStyle,
  } = useCardContext()

  const handleGradientChange = useCallback(
    (elem: HTMLInputElement) => {
      setIsGradient(elem.checked ?? false)
    },
    [setIsGradient, isGradient]
  )

  return (
    <div className="card-style">
      <h2>Visit card design</h2>
      <CardLogoInput />
      <CardIntegerInput
        className="half"
        name="width"
        value={style.width}
        label="Width"
        onChange={(width) => updateStyle({ width })}
      />
      <CardIntegerInput
        className="half"
        name="height"
        value={style.height}
        label="Height"
        onChange={(height) => updateStyle({ height })}
      />
      <h3>Background</h3>
      <div>
        <label>{isGradient ? 'From' : 'Color'}</label>{' '}
        <ColorPicker
          color={style.bgColor1}
          onChange={(bgColor1) => updateStyle({ bgColor1 })}
        />
        {isGradient && <label> to </label>}
        {isGradient && (
          <ColorPicker
            color={style.bgColor2}
            onChange={(bgColor2) => updateStyle({ bgColor2 })}
          />
        )}
      </div>
      <div>
        <label>Use a gradient</label>{' '}
        <input
          checked={isGradient}
          type="checkbox"
          onChange={(e) => handleGradientChange(e.target)}
        />{' '}
        {isGradient && (
          <CardIntegerInput
            name="gradientAngle"
            label="Gradient angle"
            onChange={(angle) => setGradientAngle(angle)}
            max={360}
            min={0}
            value={gradientAngle}
            inline
          />
        )}
      </div>
    </div>
  )
}
