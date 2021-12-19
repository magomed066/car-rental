import React from 'react'
import {
	Card as CardEl,
	CardActions,
	CardContent,
	CardMedia,
	Typography,
	IconButton,
} from '@mui/material'
import { Favorite } from '@mui/icons-material'

const Card = () => {
	return (
		<CardEl sx={{ maxWidth: 345, mb: '30px' }}>
			<CardMedia
				component="img"
				height="200"
				image="https://images.unsplash.com/photo-1601362840469-51e4d8d58785?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
				alt="green iguana"
			/>
			<CardContent>
				<Typography gutterBottom variant="h5" component="div">
					Lizard
				</Typography>
				<Typography variant="body2" color="text.secondary">
					Lizards are a widespread group of squamate reptiles, with over 6,000
					species, ranging across all continents except Antarctica
				</Typography>
			</CardContent>
			<CardActions>
				<IconButton>
					<Favorite color="primary" />
				</IconButton>
			</CardActions>
		</CardEl>
	)
}

export default Card
