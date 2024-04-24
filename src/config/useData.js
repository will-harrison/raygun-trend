import { useEffect, useState } from 'react'
import getData from '../api/getData'
import useFilterArray from './useFilterArray'

const filteredResults = ({ arr, filterArr }) => {
  return filterArr.reduce((a, b) => {
    return filterArr[b.filter]({ arr: a, value: b.value })
  }, [...arr])
}


const useData = () => {
  const [data, setData] = useState()
  const { filterArray } = useFilterArray()

  useEffect(() => {
    const fetchData = async () => {
      const returnedData = await getData()
      setData(returnedData)
    }
    fetchData()
  })

  useEffect(() => {
    if (filterArray.length === 0) {
      setData(d => d)
      return
    }
    setData(d => filteredResults({ arr: d, filterArr: filterArray }))
    return () => { };
  }, [data, setData, filterArray])


  return {
    data, setData
  }
}

export default useData