import { createContext, Suspense, ErrorBoundary } from 'react'
import { QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { BrowserRouter as Router } from 'react-router-dom';
import Loading from '../views/Loading'
import { queryClient } from '../api/queryClient'

const AppContext = createContext(undefined)

const AppProvider = ({ children }) => {
  return (
    <AppContext.Provider value={AppContext}>
      <Router>{children}</Router>
    </AppContext.Provider>
  )
}
// <Suspense fallback={<Loading />}>
//   <ErrorBoundary fallback={<Loading />}>
//     <QueryClientProvider client={queryClient}>
//       {process.env.NODE_ENV !== 'test' && <ReactQueryDevtools />}
// <Router>{children}</Router>
//     </QueryClientProvider>
//   </ErrorBoundary>
// </Suspense>

export default AppProvider