import React from 'react'
import { Grid } from '@mui/material'
import { Outlet } from 'react-router-dom'
import { Header } from '../../components'

const Main = () => {
	return (
		<>
			<Header />
			<Grid container justifyContent="center" marginTop={2} spacing={3}>
				<Outlet />
			</Grid>
		</>
	)
}

export default Main
