import { Box, Grid } from '@mui/material'
import React from 'react'
import { Header, Card, Sidebar } from '../../components'

import useStyles from './style'

const Main = () => {
	const classes = useStyles()

	return (
		<>
			<Header />
			<Grid container justifyContent="center" marginTop={2} spacing={3}>
				<Grid item md={2} lg={2} sm={12} xs={12}>
					<Sidebar />
				</Grid>
				<Grid item md={8} lg={8} sm={12} xs={12}>
					<Box className={classes.cards}>
						<Card />
						<Card />
						<Card />
						<Card />
					</Box>
				</Grid>
			</Grid>
		</>
	)
}

export default Main
