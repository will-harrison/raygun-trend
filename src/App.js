import { useState, useEffect } from 'react';
import AppProvider from './providers/AppProvider'
import { AppRoutes } from './routes'
import storage from './hooks/useStorage';

const App = () => {
  return (
    <AppProvider>
      <AppRoutes />
    </AppProvider>
  );
}

export default App;
