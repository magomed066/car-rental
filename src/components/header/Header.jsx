import React from 'react'
import { Menu as MenuIcon, AccountCircle } from '@mui/icons-material'
import {
	AppBar,
	Box,
	FormControlLabel,
	FormGroup,
	IconButton,
	Switch,
	Menu,
	Toolbar,
	Typography,
	MenuItem,
	Button,
} from '@mui/material'
const Header = () => {
	const [auth, setAuth] = React.useState(true)
	const [anchorEl, setAnchorEl] = React.useState(null)

	const handleChange = (event) => {
		setAuth(event.target.checked)
	}

	const handleMenu = (event) => {
		setAnchorEl(event.currentTarget)
	}

	const handleClose = () => {
		setAnchorEl(null)
	}
	return (
		<Box sx={{ flexGrow: 1 }}>
			<AppBar position="static">
				<Toolbar>
					<IconButton
						size="large"
						edge="start"
						color="inherit"
						aria-label="menu"
						sx={{ mr: 2 }}
					>
						<MenuIcon />
					</IconButton>
					<Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
						Car Rental App
					</Typography>
					<Button variant="contained" color="info" sx={{ mr: '20px' }}>
						Bookmarked
					</Button>
					{auth && (
						<>
							<IconButton
								size="large"
								aria-label="account of current user"
								aria-controls="menu-appbar"
								aria-haspopup="true"
								onClick={handleMenu}
								color="inherit"
							>
								<AccountCircle />
							</IconButton>
							<Menu
								id="menu-appbar"
								anchorEl={anchorEl}
								anchorOrigin={{
									vertical: 'top',
									horizontal: 'right',
								}}
								keepMounted
								transformOrigin={{
									vertical: 'top',
									horizontal: 'right',
								}}
								open={Boolean(anchorEl)}
								onClose={handleClose}
							>
								<MenuItem onClick={handleClose}>Profile</MenuItem>
								<MenuItem onClick={handleClose}>My account</MenuItem>
							</Menu>
						</>
					)}
				</Toolbar>
			</AppBar>
		</Box>
	)
}

export default Header
