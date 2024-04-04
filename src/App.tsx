import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import HomePage from './pages/HomePage';
import AppLayout from './ui/AppLayout';
import TvSeries from './pages/TvSeriesPage';
import Persons from './pages/Persons';
import GlobalStyles from './styles/GlobalStyle';
import MoviePage from './pages/MoviePage';
import PersonPage from './pages/PersonPage';
import TvSeriesPage from './pages/SeriesPage';
import MoviesPage from './pages/MoviesPage';
import MoviesList from './features/list/MoviesList';

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
							<Route path='movies' element={<MoviesPage />}>
								<Route path='popular' element={<MoviesList type={'popular'} />} />
								<Route path='nowPlaying' element={<MoviesList type={'nowPlaying'} />} />
								<Route path='topRated' element={<MoviesList type={'topRated'} />} />
								<Route path='upcoming' element={<MoviesList type={'upcoming'} />} />
							</Route>
							<Route path='tv-series' element={<TvSeries />} />
							<Route path='persons' element={<Persons />} />
							<Route path='movie/:movieId' element={<MoviePage />} />
							<Route path='person/:personId' element={<PersonPage />} />
							<Route path='tv/:tvId' element={<TvSeriesPage />} />
						</Route>
					</Routes>
				</BrowserRouter>
				<ReactQueryDevtools />
			</QueryClientProvider>
		</>
	);
}

export default App;
