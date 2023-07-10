import React from 'react'
import Crypto from '../UI/Crypto'
import useHttp from '../hooks/use-http'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useRef } from 'react'

const Cryptos = (props) => {
  const { simplified } = props
  const [searchTerm, setSearchTerm] = useState('')
  const RENDERED_COINS = simplified ? 10 : 50
  const url =
    'https://coinranking1.p.rapidapi.com/coins?referenceCurrencyUuid=yhjMzLPhuIDl&timePeriod=24h&tiers%5B0%5D=1&orderBy=marketCap&orderDirection=desc&limit=50&offset=0'
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'b44994dec7msh5f21bae42f299eap199f16jsn59d78dbd4a79',
      'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com',
    },
  }
  const searchCoinsRef = useRef()

  const { fetchData, loadedData: loadedCoinsData } = useHttp()

  const coins = loadedCoinsData.coins ? getFilteredCoins() : []

  function getFilteredCoins() {
    return loadedCoinsData.coins.slice(0, RENDERED_COINS).filter((coin) => {
      return coin.name.toLowerCase().includes(searchTerm.toLowerCase())
    })
  }

  useEffect(() => {
    fetchData(url, options)
  }, [fetchData])

  const searchChangeHandler = () => {
    setSearchTerm(searchCoinsRef.current.value)
  }

  const title = (
    <div className='flex items-center justify-between'>
      <h1 className='text-2xl pb-3'>
        <b>Top {RENDERED_COINS} Cryptos in The World</b>
      </h1>
      <Link to='/currencies' className='text-blue-500 hover:underline'>
        Show more
      </Link>
    </div>
  )

  const searchBar = (
    <input
      type='text'
      placeholder='search'
      autoFocus
      ref={searchCoinsRef}
      className='block mx-auto mb-5 -mt-2 text-lg pr-3 py-2 pl-1 outline-main outline-offset-2 outline-1'
      onChange={searchChangeHandler}
    />
  )

  return (
    <section className='cryptos mt-8'>
      {simplified && title}
      {!simplified && searchBar}
      <ul className='grid md:grid-cols-2 xl:grid-cols-4 gap-y-2 gap-x-2'>
        {coins.map((coin) => {
          return <Crypto key={coin.uuid} coin={coin} />
        })}
      </ul>
    </section>
  )
}

export default Cryptos
