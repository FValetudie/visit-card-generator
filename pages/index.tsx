import React from 'react'
import { useRouter } from 'next/router';

import VisitCard from '../components/VisitCard'

export default function CreateVisitCard() {
  const { query } = useRouter();
  const visitCardData = typeof query?.visitCard === 'string' ? query?.visitCard : undefined;
  const displayOnly = !!query?.share;

  return <VisitCard displayOnly={displayOnly} visitCard={visitCardData} />
}
