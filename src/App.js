//import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Favorite from './views/Favorite';
import SearchResult from './views/SearchResult';
import Home from './views/Home';
import Navbar from './views/Navbar';
function App() {
	return (
		<div className="App bg-green-100/30">
			<Navbar />
			<div className="min-h-screen  pt-2">
				<Routes>
					<Route
						path="/"
						element={
							<>
								<Home />
							</>
						}
					/>{' '}
					<Route
						path="favorite"
						element={<Favorite />}
					/>
					<Route
						path="result"
						element={<SearchResult />}
					/>
				</Routes>
			</div>
		</div>
	);
}

export default App;
