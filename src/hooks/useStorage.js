const tokenPrefix = 'trend-report'
const storage = ({ token, value }) => ({
  getStorage: () => JSON.parse(window.localStorage.getItem(`${tokenPrefix}${token}`)),
  setStorage: () => window.localStorage.setItem(`${tokenPrefix}${token}`, JSON.stringify(value)),
  clearStorage: () => window.localStorage.removeItem(`${tokenPrefix}${token}`)
})

export default storage