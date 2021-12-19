import React from 'react'
import { Grid, Typography } from '@mui/material'

import useStyles from './style'

const CarInfo = () => {
	const classes = useStyles()

	return (
		<>
			<Grid item>
				<Typography>Profile</Typography>

				{/* <Box component="div" className={classes.images}>
					<Box
						className={`${classes.active} ${classes.img}`}
						component="img"
						sx={{
							width: '100%',
							maxWidth: '100px',
						}}
						alt="The house from the offer."
						src="https://images.unsplash.com/photo-1511919884226-fd3cad34687c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
					/>
					<Box
						className={` ${classes.img}`}
						component="img"
						sx={{
							width: '100%',
							maxWidth: '100px',
						}}
						alt="The house from the offer."
						src="https://images.unsplash.com/photo-1511919884226-fd3cad34687c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
					/>
					<Box
						className={` ${classes.img}`}
						component="img"
						sx={{
							width: '100%',
							maxWidth: '100px',
						}}
						alt="The house from the offer."
						src="https://images.unsplash.com/photo-1511919884226-fd3cad34687c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
					/>
				</Box> */}
			</Grid>
		</>
	)
}

export default CarInfo
