import React from 'react';
import { Routes, Route} from 'react-router-dom';
import Home from '../pages/Home';
import Favorites from '../pages/Favorites';

function AppRoutes() {
	return (
		<div className="container">
			<Routes>
				<Route  path="/" element={<Home/>} />
				<Route  path="/favorites" element={<Favorites/>}/>
			</Routes>
		</div>
	);
}

export default AppRoutes;
