import { useCallback } from 'react'
import { useState } from 'react'

const useHttp = (apiType) => {
  const [loadedData, setLoadedData] = useState({})
  const [isLoading, setIsLoading] = useState(false)

  let fetchData = async (url, options) => {
    setIsLoading(true)

    try {
      const response = await fetch(url, options)
      if (!response.ok) {
        throw new Error('Something went wrong')
      }

      const result = await response.json()

      switch (apiType) {
        case 'news':
          setLoadedData(result)
          break
        default:
          setLoadedData(result.data)
      }
    } catch (error) {
      console.error(error)
    }
    setIsLoading(false)
  }

  fetchData = useCallback(fetchData, [])

  return {
    fetchData,
    loadedData,
    isLoading,
  }
}

export default useHttp
