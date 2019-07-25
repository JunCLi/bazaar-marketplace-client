import React from 'react'

import { useMutation } from 'react-apollo-hooks'
import { SIGNUP } from '../../gql/usersQuery'

import { Formik } from 'formik'
import { Button, FormHelperText, TextField } from '@material-ui/core'

import login from '../../css/loginSignup/login.module.css'

const SignupForm = props => {
	const { handleSwapCard } = props
	const signupUser = useMutation(SIGNUP)

	const initialValues = {
		userEmail: '',
		firstname: '',
		lastname: '',
		password: '',
		confirmPassword: '',
	}

	return (
		<Formik
			initialValues={initialValues}
			// validationSchema={}
			onSubmit={async (values, { setSubmitting }) => {
				try {
					const result = await signupUser[0]({
						variables: {input: {
							email: values.userEmail,
							password: values.password,
							first_name: values.firstname,
							last_name: values.lastname,
						}}
					})
					if (result.data.signup.message === 'success') {
						props.history.push('/login')
						handleSwapCard()
					}
				} catch(error) {
					throw error
				}
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
								type='text'
								name='firstname'
								label='First Name'
								placeholder='Jane'
								value={values.firstname}
								onChange={handleChange}
								onBlur={handleBlur}
								margin='normal'
							/>
							{errors.firstname && touched.firstname ? (
								<FormHelperText className='form-helper form-error'>
									{errors.firstname}
								</FormHelperText>
							) : (
								<FormHelperText className='form-helper'>
								</FormHelperText>
							)}
						</div>

						<div className={login.formField}>
							<TextField
								type='text'
								name='lastname'
								label='Last Name'
								placeholder='Doe'
								value={values.lastname}
								onChange={handleChange}
								onBlur={handleBlur}
								margin='normal'
							/>
							{errors.lastname && touched.lastname ? (
								<FormHelperText className='form-helper form-error'>
									{errors.lastname}
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

						<div className={login.formField}>
							<TextField
								type='password'
								name='confirmPassword'
								label='Confirm Password'
								value={values.confirmPassword}
								onChange={handleChange}
								onBlur={handleBlur}
								margin='normal'
								/>
							{errors.confirmPassword && touched.confirmPassword ? (
								<FormHelperText className='form-helper form-error'>
									{errors.confirmPassword}
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
								Sign Up
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

export default SignupForm