import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AppLayout from './ui/AppLayout';
import Movies from './pages/Movies';
import TvSeries from './pages/TvSeries';
import Persons from './pages/Persons';
import GlobalStyles from './styles/GlobalStyle';

function App() {
	return (
		<>
			<GlobalStyles />
			<BrowserRouter>
				<Routes>
					<Route element={<AppLayout />}>
						<Route index element={<HomePage />} />
						<Route path='movies' element={<Movies />} />
						<Route path='tv-series' element={<TvSeries />} />
						<Route path='persons' element={<Persons />} />
					</Route>
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
