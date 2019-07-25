import React from 'react'

import { useMutation } from 'react-apollo-hooks'
import { LOGIN } from '../../gql/usersQuery'

import { Formik } from 'formik'
import { Button, FormHelperText, TextField } from '@material-ui/core'

import login from '../../css/loginSignup/login.module.css'

const LoginForm = props => {
	const loginUser = useMutation(LOGIN)

	const initialValues = {
		userEmail: '',
		password: '',
	}

	return (
		<Formik
			initialValues={initialValues}
			// validationSchema={loginValidation}
			onSubmit={async (values, { setSubmitting }) => {
				try {
					const result = await loginUser[0]({
						variables: {input: {
							email: values.userEmail,
							password: values.password,
						}}
					})
					if (result.data.login.message === 'success') {
						props.history.push('/')
					}
				} catch(error) {
					throw error
				}
				// console.log(result)
				setSubmitting(false)
			}}
		>
			{formikProps => {
				const {
					values,
					touched,
					errors,
					dirty,
					isSubmitting,
					handleChange,
					handleBlur,
					handleSubmit,
					handleReset,
				} = formikProps

				return (
					<form className={login.form} onSubmit={handleSubmit}>
						<div className={login.formField}>
							<TextField
								type='text'
								name='userEmail'
								label='Email'
								placeholder='yourEmail@email.com'
								value={values.userEmail}
								onChange={handleChange}
								onBlur={handleBlur}
								margin='normal'
							/>
							{errors.userEmail && touched.userEmail ? (
								<FormHelperText className='form-helper form-error'>
									{errors.userEmail}
								</FormHelperText>
							) : (
								<FormHelperText className='form-helper'>
								</FormHelperText>
							)}
						</div>

						<div className={login.formField}>
							<TextField
								type='password'
								name='password'
								label='Password'
								value={values.password}
								onChange={handleChange}
								onBlur={handleBlur}
								margin='normal'
								/>
							{errors.password && touched.password ? (
								<FormHelperText className='form-helper form-error'>
									{errors.password}
								</FormHelperText>
							) : (
								<FormHelperText className='form-helper'>
								</FormHelperText>
							)}
						</div>

						<section className={login.formButtons}>
							<Button
								className={login.submitButton}
								type='submit'
								color='primary'
								variant='contained'
								disabled={isSubmitting}
							>
								Log In
							</Button>
							<Button
								className={login.resetButton}
								type='button'
								variant={!dirty || isSubmitting ? 'text' : 'contained'}
								disabled={!dirty || isSubmitting}
								onClick={handleReset}
							>
								Reset
							</Button>
						</section>
					</form>
				)
			}}
		</Formik>
	)
}

export default LoginForm