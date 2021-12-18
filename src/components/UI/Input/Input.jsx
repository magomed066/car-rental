import { Visibility, VisibilityOff } from '@mui/icons-material'
import { IconButton, InputAdornment } from '@mui/material'
import { Grid, TextField } from '@mui/material'
import React from 'react'

const Input = ({
	half,
	name,
	id,
	label,
	type = 'text',
	onChange,
	focus,
	togglePassword,
}) => {
	return (
		<Grid item xs={12} sm={half ? 6 : 12}>
			<TextField
				fullWidth
				required
				name={name}
				autoFocus={focus}
				id={id}
				label={label}
				type={type}
				variant="outlined"
				onChange={onChange}
				InputProps={
					name === 'password'
						? {
								endAdornment: (
									<InputAdornment position="end">
										<IconButton onClick={togglePassword}>
											{type === 'password' ? <Visibility /> : <VisibilityOff />}
										</IconButton>
									</InputAdornment>
								),
						  }
						: null
				}
			/>
		</Grid>
	)
}

export default Input
