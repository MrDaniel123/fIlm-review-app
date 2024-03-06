import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import HomePage from './pages/HomePage';
import AppLayout from './ui/AppLayout';
import Movies from './pages/Movies';
import TvSeries from './pages/TvSeries';
import Persons from './pages/Persons';
import GlobalStyles from './styles/GlobalStyle';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import MoviePage from './pages/MoviePage';
import PersonPage from './pages/PersonPage';

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			// refetchOnWindowFocus: false,
			// refetchOnMount: false,
			// refetchOnReconnect: false,
			// retry: 1,
			// staleTime: 5 * 1000,
		},
	},
});

function App() {
	return (
		<>
			<QueryClientProvider client={queryClient}>
				<GlobalStyles />
				<BrowserRouter>
					<Routes>
						<Route element={<AppLayout />}>
							<Route index element={<HomePage />} />
							<Route path='movies' element={<Movies />} />
							<Route path='tv-series' element={<TvSeries />} />
							<Route path='persons' element={<Persons />} />
							<Route path='movie/:movieId' element={<MoviePage />} />
							<Route path='person/:personId' element={<PersonPage />} />
						</Route>
					</Routes>
				</BrowserRouter>
				<ReactQueryDevtools />
			</QueryClientProvider>
		</>
	);
}

export default App;
