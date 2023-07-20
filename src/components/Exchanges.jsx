import useHttp from '../hooks/use-http'
import { useEffect } from 'react'
import Loader from '../UI/Loader'

const Exchanges = () => {
  const url =
    'https://coinranking1.p.rapidapi.com/coins?referenceCurrencyUuid=yhjMzLPhuIDl&timePeriod=24h&tiers%5B0%5D=1&orderBy=marketCap&orderDirection=desc&limit=50&offset=0'

  const { fetchData, loadedData: loadedCoinsData, isLoading } = useHttp()

  useEffect(() => {
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': 'b44994dec7msh5f21bae42f299eap199f16jsn59d78dbd4a79',
        'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com',
      },
    }
    fetchData(url, options)
  }, [fetchData, url])

  if (isLoading) {
    return <Loader />
  }

  return
}

export default Exchanges
