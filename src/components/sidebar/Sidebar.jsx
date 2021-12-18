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
				Категории
			</Typography>

			<List>
				<ListItem disablePadding>
					<ListItemButton component="a" href="#simple-list">
						<ListItemText primary="Пикапы" />
					</ListItemButton>
				</ListItem>
				<ListItem disablePadding>
					<ListItemButton component="a" href="#simple-list">
						<ListItemText primary="Грузовые" />
					</ListItemButton>
				</ListItem>
				<ListItem disablePadding>
					<ListItemButton component="a" href="#simple-list">
						<ListItemText primary="Легковые" />
					</ListItemButton>
				</ListItem>
				<ListItem disablePadding>
					<ListItemButton component="a" href="#simple-list">
						<ListItemText primary="Мотоциклы" />
					</ListItemButton>
				</ListItem>
			</List>
		</Paper>
	)
}

export default Sidebar
