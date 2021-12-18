import React from 'react'
import { Avatar, Box, Button, Grid, Typography } from '@mui/material'
import { useState } from 'react'
import Input from '../UI/Input/Input'

import useStyles from './style'
import { LockOutlined } from '@mui/icons-material'

const FormLogin = () => {
	const classes = useStyles()
	const [isSignup, setIsSignup] = useState(false)
	const [showPassword, setShowPassword] = useState(false)

	const submitHandler = (e) => {
		e.preventDefault()
	}

	const togglePassword = () => setShowPassword((prev) => !prev)

	return (
		<Box component="form" onSubmit={submitHandler} className={classes.form}>
			<Avatar sx={{ m: 1, bgcolor: 'error.main', margin: '0 auto' }}>
				<LockOutlined />
			</Avatar>
			<Typography
				component="h1"
				variant="h5"
				sx={{ mb: '40px', mt: '20px', textAlign: 'center' }}
			>
				{isSignup ? 'Sign Up' : 'Sign In'}
			</Typography>

			<Grid container justifyContent="center" spacing={2}>
				{isSignup && (
					<>
						<Input
							type="firstName"
							label="First Name"
							name="firstName"
							focus
							half
						/>
						<Input type="lastName" label="Last Name" name="lastName" half />
					</>
				)}

				<Input type="email" label="E-mail" name="email" />
				<Input
					type="password"
					label="Password"
					name="password"
					type={showPassword ? 'text' : 'password'}
					togglePassword={togglePassword}
				/>

				<Button
					color="primary"
					variant="contained"
					fullWidth
					className={classes.button}
					sx={{
						mt: '20px',
						ml: '15px',
					}}
				>
					{isSignup ? 'Sign Up' : 'Sign In'}
				</Button>

				<Grid container justifyContent="end">
					<Grid item>
						<Button
							sx={{ mt: '20px' }}
							onClick={() => setIsSignup((prev) => !prev)}
						>
							{isSignup ? 'Already have an account?' : `Don't have an account`}
						</Button>
					</Grid>
				</Grid>
			</Grid>
		</Box>
	)
}

export default FormLogin
