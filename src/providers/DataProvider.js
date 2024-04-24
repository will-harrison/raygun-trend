import { createContext, useState } from "react";


const filterArr = [
  // { filter: 'item', value: 'toaster' },
  { filter: 'category', value: 'appliances' },
]

const DataContext = createContext(undefined)

// export const DataProvider = DataContext.Provider
export const DataProvider = ({ children }) => {
  const [data, setData] = useState(testData)
  const [filterArray, setFilterArray] = useState(filterArr)

  return (
    <DataContext.Provider value={{ data, setData, filterArray, setFilterArray }}>
      {children}
    </DataContext.Provider>
  )
}

export default DataContext
