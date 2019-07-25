import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import { useQuery } from 'react-apollo-hooks'
import { AUTHENTICATION } from './gql/util/authenticationQuery'

import NonAuthTopNav from './components/navigation/NonAuthTopNav'

import Home from './components/home/Home'
import Error404 from './components/404/Error404'

import Login from './components/loginSignup/LoginSignup'


const AppRouter = () => {
	const { data, loading, error, refetch } = useQuery(AUTHENTICATION)
	// const [authorizationStatus, setAuthorizationStatus] = useState(
	// 	error && error.message === 'GraphQL error: jwt must be provided'
	// 		? false
	// 		: true
	// )

	if (loading) return (
		<div>Loading...</div>
	)

	// console.log('error.message: ', error.message)
	// console.log('matching error.message: ', error.message === 'GraphQL error: jwt must be provided')

	// if (error.message === 'GraphQL error: jwt must be provided') {

	// } else 
	if (error) {
		return (
			<>
				<Router>
					<NonAuthTopNav />
					<Switch>
						<Route path='/' exact component={Home} />
						<Route path='/login' exact component={Login} />
						<Route component={Error404} />
					</Switch>
				</Router>
			</>
		)
	}
	

	return (
		<Router>
			<Switch>
				<Route path='/' exact component={Home} />
				<Route component={Error404} />
			</Switch>
		</Router>
	)
}

export default AppRouter