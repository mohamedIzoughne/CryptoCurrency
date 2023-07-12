import React from 'react'
import NewsItem from './NewsItem'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import useHttp from '../hooks/use-http'
import Loader from '../UI/Loader'

const LatestNews = ({ simplified }) => {
  const RENDERED_NUM = simplified ? 6 : 10
  const url =
    'https://bing-news-search1.p.rapidapi.com/news/search?q=crypto&freshness=Day&textFormat=Raw&safeSearch=Off'

  const options = {
    method: 'GET',
    headers: {
      'X-BingApis-SDK': 'true',
      'X-RapidAPI-Key': 'b44994dec7msh5f21bae42f299eap199f16jsn59d78dbd4a79',
      'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com',
    },
  }

  const { fetchData, loadedData, isLoading } = useHttp('news')

  useEffect(() => {
    fetchData(url, options)
  }, [fetchData])

  let { value: newsList } = loadedData
  newsList = newsList ? newsList.slice(0, RENDERED_NUM) : []

  const header = (
    <div className='flex items-center justify-between'>
      <h1 className='text-2xl pb-3'>
        <b>Latest Crypto News</b>
      </h1>
      <Link to='/news' className='text-blue-500 hover:underline'>
        Show more
      </Link>
    </div>
  )

  if (isLoading) {
    return <Loader />
  }

  return (
    <section className='news mt-8'>
      {simplified && header}
      <ul className='grid md:grid-cols-2 lg:grid-cols-3 gap-y-2 gap-x-2'>
        {newsList.map((news) => {
          return (
            <NewsItem
              key={news?.url}
              name={news?.name}
              description={news?.description}
              thumbnail={news?.image?.thumbnail?.contentUrl}
              source={news?.provider[0]?.name}
              sourceThumbnail={news?.provider[0]?.image?.thumbnail?.contentUrl}
              date={news?.datePublished}
            />
          )
        })}
      </ul>
    </section>
  )
}

export default LatestNews
