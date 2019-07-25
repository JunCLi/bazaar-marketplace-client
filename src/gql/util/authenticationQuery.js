import gql from 'graphql-tag'

export const AUTHENTICATION = gql`
	query {
		getUser {
			id
			email
			first_name
			last_name
		}
	}
`