import React from 'react'
import { useParams } from 'react-router-dom'
import useHttp from '../hooks/use-http'
import { useEffect } from 'react'
import millify from 'millify'
import './CurrencyDetails.css'
import Loader from '../UI/Loader'

const CurrencyDetails = () => {
  const { id } = useParams()

  const url = `https://coinranking1.p.rapidapi.com/coin/${id}?referenceCurrencyUuid=yhjMzLPhuIDl&timePeriod=24h`
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'b44994dec7msh5f21bae42f299eap199f16jsn59d78dbd4a79',
      'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com',
    },
  }

  const { fetchData, loadedData, isLoading } = useHttp()

  useEffect(() => {
    fetchData(url, options)
  }, [fetchData])

  const coinInfo = loadedData ? loadedData?.coin : {}

  if (isLoading) {
    return <Loader />
  }
  return (
    <>
      <div className='image-holder flex justify-center w-full mb-4'>
        <img src={coinInfo?.iconUrl} alt='' className='w-28' />
      </div>
      <section className='value-stats grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3'>
        <section>
          <h1 className='text-xl mb-3 text-center'>
            <b>Bitcoin Value statistics </b>
          </h1>
          <ul>
            <li>
              <h2>Symbol:</h2>
              <span>{coinInfo?.symbol}</span>
            </li>
            <li>
              <h2>Rank:</h2>
              <span>{coinInfo?.rank}</span>
            </li>
            <li>
              <h2>Price:</h2>
              <span>{millify(coinInfo?.price)}</span>
            </li>
            <li>
              <h2>Number of markets:</h2>
              <span>{millify(coinInfo?.numberOfMarkets)}</span>
            </li>
            {/* <li>
            <h2>24h Volume:</h2>
            // {/* <span>{coinInfo['24hVolume']}</span> */}
            {/* </li> */}
          </ul>
        </section>
        <section>
          <h1 className='text-xl mb-3 text-center'>
            <b>Bitcoin Value statistics </b>
          </h1>
          <ul>
            <li>
              <h2>Symbol:</h2>
              <span>{coinInfo?.symbol}</span>
            </li>
            <li>
              <h2>Rank:</h2>
              <span>{coinInfo?.rank}</span>
            </li>
            <li>
              <h2>Price:</h2>
              <span>{millify(coinInfo?.price)}</span>
            </li>
            <li>
              <h2>Number of markets:</h2>
              <span>{millify(coinInfo?.numberOfMarkets)}</span>
            </li>
            {/* <li>
            <h2>24h Volume:</h2>
            // {/* <span>{coinInfo['24hVolume']}</span> */}
            {/* </li> */}
          </ul>
        </section>
      </section>
    </>
  )
}

export default CurrencyDetails
