import React from 'react'
import { Box, Grid } from '@mui/material'
import { Card, Sidebar } from '../../components'

import useStyles from './style'

const Cars = () => {
	const classes = useStyles()

	return (
		<>
			<Grid item md={3} lg={2} sm={12} xs={12}>
				<Sidebar />
			</Grid>
			<Grid item md={7} lg={8} sm={12} xs={12}>
				<Box className={classes.cards}>
					<Card />
					<Card />
					<Card />
					<Card />
				</Box>
			</Grid>
		</>
	)
}

export default Cars
