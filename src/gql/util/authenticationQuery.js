import gql from 'graphql-tag'

export const AUTHENTICATION = gql `
	query {
		getUser {
			id
			email
			fullname
		}
	}
`