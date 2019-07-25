import React from 'react'

import { Card, Link, Typography } from '@material-ui/core'
import { Link as RouterLink } from 'react-router-dom'

import SignupForm from './SignupForm'

import login from '../../css/loginSignup/login.module.css'

const LoginCard = props => {
	const { handleSwapCard } = props 

	return (
		<Card className={login.card}>
			<Typography variant='h4' align='center'>Signup to Bazaar</Typography>
			<SignupForm {...props} />

			<Typography className={login.changeForm} paragraph>Already have an account? <Link onClick={handleSwapCard}>Login</Link></Typography>
		</Card>
	)
}

export default LoginCard