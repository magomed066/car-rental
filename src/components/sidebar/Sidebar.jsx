import React from 'react'
import {
	List,
	ListItem,
	ListItemButton,
	ListItemText,
	Paper,
	Typography,
} from '@mui/material'

import useStyles from './style'

const Sidebar = () => {
	const classes = useStyles()

	return (
		<Paper elevation={2} className={classes.paper}>
			<Typography component="h6" variant="h5" sx={{ ml: '15px', mb: '20px' }}>
				Categories
			</Typography>

			<List>
				<ListItem disablePadding>
					<ListItemButton component="a" href="#simple-list">
						<ListItemText primary="Sedan" />
					</ListItemButton>
				</ListItem>
				<ListItem disablePadding>
					<ListItemButton component="a" href="#simple-list">
						<ListItemText primary="Coupe" />
					</ListItemButton>
				</ListItem>
				<ListItem disablePadding>
					<ListItemButton component="a" href="#simple-list">
						<ListItemText primary="Sports car" />
					</ListItemButton>
				</ListItem>
				<ListItem disablePadding>
					<ListItemButton component="a" href="#simple-list">
						<ListItemText primary="Station wagon" />
					</ListItemButton>
				</ListItem>
				<ListItem disablePadding>
					<ListItemButton component="a" href="#simple-list">
						<ListItemText primary="Hatchback" />
					</ListItemButton>
				</ListItem>
				<ListItem disablePadding>
					<ListItemButton component="a" href="#simple-list">
						<ListItemText primary="Convertible" />
					</ListItemButton>
				</ListItem>
				<ListItem disablePadding>
					<ListItemButton component="a" href="#simple-list">
						<ListItemText primary="Minivan" />
					</ListItemButton>
				</ListItem>
				<ListItem disablePadding>
					<ListItemButton component="a" href="#simple-list">
						<ListItemText primary="Pickup truck" />
					</ListItemButton>
				</ListItem>
			</List>
		</Paper>
	)
}

export default Sidebar
