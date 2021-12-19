import React from 'react'
import { Box, Grid, Typography, Fade, Button } from '@mui/material'
import { Input } from '../../components'
import useStyles from './style'
import { useState } from 'react'

import FileBase64 from 'react-file-base64'

const RentCar = () => {
	const classes = useStyles()
	const [formData, setFormData] = useState('')

	return (
		<>
			<Grid item xs={12} sm={12} md={12} lg={12}>
				<Typography variant="h5" component="h3" sx={{ ml: '60px' }}>
					Reant a car
				</Typography>
			</Grid>
			<Grid item xs={12} sm={12} md={4} lg={4}>
				<Box
					component="img"
					sx={{
						width: '100%',
						mb: '20px',
					}}
					alt="The house from the offer."
					src={
						formData
							? formData
							: 'https://lh3.googleusercontent.com/proxy/oz13INHtD-0901c53d8pnvzz5NIQOLnfUFyd92jT0KOy1X3oJM7YKS-7vYRWGrQircokyIupsX0uce446O90qFhidG45MEUpULxF0AVdUiVKgc8Hdza3NkuFqQXLxn0'
					}
				/>
			</Grid>
			<Grid item xs={12} sm={12} md={7} lg={7}>
				<Grid container spacing={2} justifyContent="end">
					<Input name="name" label="Name" half />
					<Input name="model" label="Model" half />
					<Input name="price" label="Price" half />
					<Input name="address" label="Address" half />
					{/* <Input
						name="image"
						type="file"
						half
						onChange={(e) => setFormData(e.target.value)}
					/> */}

					<Input name="description" label="Description" />

					<Grid item xs={12} sm={12} md={12} lg={12}>
						<FileBase64
							// multiple={true}
							className={classes.fileImg}
							onDone={({ base64 }) => setFormData(base64)}
						/>
					</Grid>

					<Grid item xs={12} sm={12} md={4} lg={4}>
						<Button color="primary" variant="contained" fullWidth>
							Rent
						</Button>
					</Grid>
				</Grid>
			</Grid>
		</>
	)
}

export default RentCar
