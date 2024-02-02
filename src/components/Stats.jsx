import { useEffect, useMemo } from "react"
import useHttp from "../hooks/use-http"
import Stat from "../UI/Stat"
import millify from "millify"

const Stats = () => {
  const url =
    "https://coinranking1.p.rapidapi.com/stats?referenceCurrencyUuid=yhjMzLPhuIDl"
  // const options = {
  //   method: "GET",
  //   headers: {
  //     "X-RapidAPI-Key": "b44994dec7msh5f21bae42f299eap199f16jsn59d78dbd4a79",
  //     "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
  //   },
  // }

  const options = useMemo(() => {
    return {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "b44994dec7msh5f21bae42f299eap199f16jsn59d78dbd4a79",
        "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
      },
    }
  }, [])

  const { fetchData: fetchStats, loadedData: loadedStats } = useHttp(
    url,
    options
  )
  const {
    btcDominance = ". . .",
    referenceCurrencyRate = ". . .",
    total24hVolume = ". . .",
    totalCoins = ". . .",
    totalExchanges = ". . .",
    totalMarketCap = ". . .",
  } = loadedStats

  const statsData = {
    "Btc dominance": millify(btcDominance),
    "Reference currency rate": referenceCurrencyRate,
    "Total 24h volume": millify(total24hVolume),
    "Total coins": millify(totalCoins),
    "Total exchanges": millify(totalExchanges),
    "Total market cap": millify(totalMarketCap),
  }
  const statsDataKeys = Object.keys(statsData)

  useEffect(() => {
    fetchStats(url, options)
  }, [fetchStats, options, url])

  return (
    <section className="stats">
      <h1 className="text-2xl">
        <b>Global Crypto Stats</b>
      </h1>
      <ul className="grid md:grid-cols-2 gap-y-2">
        {statsDataKeys.map((key) => {
          return <Stat key={key} title={key} value={statsData[key]} />
        })}
      </ul>
    </section>
  )
}

export default Stats
