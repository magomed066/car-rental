import React from 'react'

import { CssBaseline, Grid } from '@mui/material'
import useStyles from './style'
import { FormLogin } from '../../components'

const Login = () => {
	const classes = useStyles()

	return (
		<Grid
			container
			component="main"
			sx={{ height: '100vh' }}
			xs={12}
			sm={12}
			lg={12}
			md={12}
		>
			<CssBaseline />
			<Grid item xs={false} sm={4} md={7} className={classes.image} />
			<Grid item xs={12} sm={8} md={5} className={classes.form}>
				<FormLogin />
			</Grid>
		</Grid>
	)
}

export default Login
