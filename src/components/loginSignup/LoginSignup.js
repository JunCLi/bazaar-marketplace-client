import React, { useState } from 'react'

import image from '../../assets/pexels-photo-2622187-1.jpeg'

import LoginCard from './LoginCard'
import SignupCard from './SignupCard'

import login from '../../css/loginSignup/login.module.css'
import main from '../../css/main.module.css'

const LoginSignup = props => {
	const [loginSignup, setLoginSignup] = useState(false)

	const handleSwapCard = () => {
		setLoginSignup(!loginSignup)
	}
	
	return (
		<div className={main.background}>
			<div className={`${main.container} ${login.container}`}>
				<img 
					className={login.loginImage}
					src={image}
					alt="new"
				/>
				{loginSignup
					? <SignupCard {...props} handleSwapCard={handleSwapCard} />
					: <LoginCard {...props} handleSwapCard={handleSwapCard} />
				}
			</div>
		</div>
	)
}

export default LoginSignup