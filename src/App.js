import React from 'react';

import apolloClient from './apolloclient'
import { ApolloProvider } from 'react-apollo-hooks'

import AppRouter from './AppRouter'

function App() {
  return (
    <ApolloProvider client={apolloClient}>
			<AppRouter />
		</ApolloProvider>
  );
}

export default App;
