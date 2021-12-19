import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Cars, Login, Main, RentCar } from '../../pages'

const App = () => {
	return (
		<Router>
			<div className="app">
				<Routes>
					<Route path="/" element={<Login />} />
					<Route path="/*" element={<Main />}>
						<Route path="cars" element={<Cars />} />
						<Route path="rent-car" element={<RentCar />} />
					</Route>
				</Routes>
			</div>
		</Router>
	)
}

export default App
