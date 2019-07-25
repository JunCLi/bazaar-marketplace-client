import React from 'react'
import {withRouter} from 'react-router-dom'

import logo from '../../assets/logo/transparent-logo2.png'
import { Link as RouterLink } from 'react-router-dom'
import { Link } from '@material-ui/core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

import topNav from '../../css/navigation/topNav.module.css'
import main from '../../css/main.module.css'


const NonAuthTopNav = props => {

	const handleGoToHome = () => {
		props.history.push('/')
	}

	return (
		<div className={topNav.mainContainer}>
			<div className={`${main.container} ${topNav.container}`}>
				<img
					className={topNav.logo}
					src={logo}
					alt='Bazaar Marketplace Logo'
					onClick={handleGoToHome}
				/>
				<nav className={`${main.nav} ${topNav.navMenu}`}>
					<Link component={RouterLink} to='/'>Shop</Link>
					<Link component={RouterLink} to='/login'>
						Login
					</Link>
					<Link component={RouterLink} to='/'>
						<FontAwesomeIcon icon={faShoppingCart} />
					</Link>
				</nav>
			</div>
		</div>
	)
}

export default withRouter(NonAuthTopNav)