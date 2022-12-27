import { useContext } from 'react';
import { AppContext } from './Context';
import { Routes, Route, Navigate } from 'react-router-dom';
import SharedLayout from './components/SharedLayout';
import Home from './pages/Home';
import Gallery from './pages/Gallery';
import ProductPage from './pages/ProductPage';
import gsap from 'gsap';

function App() {
	const { searchResults, searchCompleted } = useContext(AppContext);
	const ProtectedSearch = ({ children }) => {
		if (!searchCompleted.current) return <Navigate to="/" replace />;
		return children;
	};

	return (
		<div className="App">
			<Routes>
				<Route element={<SharedLayout />}>
					<Route path={'/'} element={<Home />} />
					<Route
						path={'/searchresults'}
						element={
							<ProtectedSearch>
								<Gallery />
							</ProtectedSearch>
						}
					/>
					<Route
						path={'/homes/:property_id'}
						element={
								<ProductPage />
						}
					/>
				</Route>
			</Routes>
		</div>
	);
}

export default App;
