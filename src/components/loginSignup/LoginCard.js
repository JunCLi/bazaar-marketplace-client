import React from 'react'

import { Card, Link, Typography } from '@material-ui/core'

import LoginForm from './LoginForm'

import login from '../../css/loginSignup/login.module.css'

const LoginCard = props => {
	const { handleSwapCard } = props

	return (
		<Card className={login.card}>
			<Typography variant='h4' align='center'>Login to Bazaar</Typography>
			<LoginForm {...props} />

			<Typography className={login.changeForm} paragraph>Don't have an account yet? <Link onClick={handleSwapCard}>Sign Up</Link></Typography>
		</Card>
	)
}

export default LoginCard