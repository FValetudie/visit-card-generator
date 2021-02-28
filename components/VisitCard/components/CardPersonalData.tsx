import React from 'react'

import CardTextInput from './CardTextInput'

export default function CardPersonalData() {
  return (
    <div className="card-personal-data">
      <h2>Visit card owner data</h2>
      <CardTextInput name="firstname" label="Firstname" />
      <CardTextInput name="lastname" label="Lastname" />
      <CardTextInput name="company" label="Company" />
      <CardTextInput name="position" label="Position" />
      <CardTextInput name="email" label="Email" />
      <CardTextInput name="twitter" label="Twitter" />
      <CardTextInput name="phone" label="Phone" />
    </div>
  )
}
