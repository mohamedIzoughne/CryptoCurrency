import React from 'react'
import { useParams } from 'react-router-dom'

const CurrencyDetails = () => {
  const { id } = useParams()

  return <h2>{id}</h2>
}

export default CurrencyDetails
