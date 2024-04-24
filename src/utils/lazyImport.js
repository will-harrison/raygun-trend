import * as React from "react"

// named imports for React.lazy: https://github.com/facebook/react/issues/14603#issuecomment-726551598
const lazyImport = ({ factory, name }) => {
  return Object.create({
    [name]: React.lazy(() =>
      factory().then(module => ({ default: module[name] }))
    )
  })
}

export default lazyImport