import React from 'react'

import VisitCard from '../components/VisitCard'

export default function CreateVisitCard() {
  const params = new URLSearchParams(window.location.search)
  const visitCardData = params.get('visitCard') || undefined
  const isShare = params.get('share')

  const displayOnly = (isShare ?? undefined) === '1'

  return <VisitCard displayOnly={displayOnly} visitCard={visitCardData} />
}
