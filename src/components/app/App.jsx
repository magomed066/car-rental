import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Login, Main } from '../../pages'

const App = () => {
	return (
		<Router>
			<div className="app">
				<Routes>
					<Route path="/" element={<Login />} />
					<Route path="/main" element={<Main />} />
				</Routes>
			</div>
		</Router>
	)
}

export default App
