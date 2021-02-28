import React from 'react'
import cn from 'classnames'

interface CardIntegerInputProps {
  label: string
  name: 'width' | 'height' | 'gradientAngle'
  className?: string
  value: number
  onChange: (val: number) => void
  inline?: boolean
  max?: number
  min?: number
}

export default function CardIntegerInput({
  label,
  name,
  inline,
  className,
  value,
  onChange,
  max = 600,
  min = 100,
}: CardIntegerInputProps) {
  return (
    <div className={className}>
      <div className={cn({ half: inline })}>
        <label htmlFor={name}>{label}</label>
      </div>
      <div className={cn({ half: inline })}>
        <input
          value={value}
          name={name}
          type="number"
          min={min}
          max={max}
          onChange={(e) => onChange(Number(e.target.value))}
        />
      </div>
    </div>
  )
}
