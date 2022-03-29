import React from 'react';
import useAppState from 'react-native-appstate-hook';
import { QueryClient, QueryClientProvider, QueryCache } from 'react-query';
import Main from './src/screens/Main';
import { onAppStateChange } from './src/utils/isAppActive';

const App = () => {
  const queryClient = new QueryClient();
  const queryCache = new QueryCache();

  useAppState({
    onChange: onAppStateChange,
  });

  return (
    <QueryClientProvider client={queryClient} queryCache={queryCache}>
      <Main />
    </QueryClientProvider>
  );
};

export default App;
