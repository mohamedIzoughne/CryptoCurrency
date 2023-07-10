import { useCallback } from 'react'
import { useState } from 'react'

const useHttp = (apiType) => {
  const [loadedData, setLoadedData] = useState({})

  let fetchData = async (url, options) => {
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
  }

  fetchData = useCallback(fetchData, [])

  return {
    fetchData,
    loadedData,
  }
}

export default useHttp
