import React from 'react'

import { createTheme, CssBaseline, Grid, ThemeProvider } from '@mui/material'
import { red, black } from '@mui/material/colors'
import useStyles from './style'
import { FormLogin } from '../../components'

const theme = createTheme({
	// palette: {
	// 	primary: {
	// 		light: '#fff',
	// 		main: 'rgb(23, 105, 170)',
	// 		dark: '#000',
	// 	},
	// 	secondary: {
	// 		main: '#f44336',
	// 	},
	// },
})

const Login = () => {
	const classes = useStyles()

	return (
		<ThemeProvider theme={theme}>
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
		</ThemeProvider>
	)
}

export default Login
