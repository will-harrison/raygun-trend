const filters = {
  category: ({ arr, value }) => arr.filter(f => f.category === value),
  item: ({ arr, value }) => arr.filter(f => f.item === value)
}

const filteredResults = ({ arr, filterArr }) => {
  return filterArr.reduce((a, b) => {
    return filters[b.filter]({ arr: a, value: b.value })
  }, [...arr])
}

export default filteredResults