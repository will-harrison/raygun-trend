import { useState, useEffect } from 'react'


const filterArr = [
  // { filter: 'item', value: 'toaster' },
  { filter: 'category', value: 'appliances' },
]

const useFilterArray = () => {
  const [filterArray, setFilterArray] = useState(filterArr)



  return {
    filterArray,
    setFilterArray
  }
}

export default useFilterArray