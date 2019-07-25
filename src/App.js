import React from 'react';

import apolloClient from './apolloclient'
import { ApolloProvider } from 'react-apollo-hooks'

import { MuiThemeProvider } from '@material-ui/core'
import { lightMuiTheme } from './muiTheme'

import './css/index.css'
import './css/normalize.css'

import AppRouter from './AppRouter'


function App() {
  return (
    <ApolloProvider client={apolloClient}>
			<MuiThemeProvider theme={lightMuiTheme}>
				<AppRouter />
			</MuiThemeProvider>
		</ApolloProvider>
  );
}

export default App;
