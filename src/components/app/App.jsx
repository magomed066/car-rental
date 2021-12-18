import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Login } from '../../pages'

const App = () => {
	return (
		<Router>
			<div className="app">
				<Routes>
					<Route path="/" element={<Login />} />
				</Routes>
			</div>
		</Router>
	)
}

export default App
