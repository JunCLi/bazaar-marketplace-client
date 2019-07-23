import React, { useState } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import { useQuery } from 'react-apollo-hooks'
import { AUTHENTICATION } from './gql/util/authenticationQuery'

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
	if ( error) {
		return (
			<div>Error...</div>
		)
	}
	

	return (
		<Router>
			hi
		</Router>
	)
}

export default AppRouter