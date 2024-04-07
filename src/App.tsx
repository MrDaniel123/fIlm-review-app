import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import HomePage from './pages/HomePage';
import AppLayout from './ui/AppLayout';
import TvSeriesPage from './pages/TvSeriesPage';
import GlobalStyles from './styles/GlobalStyle';
import MoviePage from './pages/MoviePage';
import PersonPage from './pages/PersonPage';
import MoviesPage from './pages/MoviesPage';
import MoviesList from './features/list/MoviesList';
import PersonsPage from './pages/PersonsPage';
import PersonsList from './features/list/PersonsList';
import TvSeriesList from './features/list/TvSeriesList';
import SeriesPage from './pages/SeriesPage';

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
							<Route path='tv-series' element={<TvSeriesPage />}>
								<Route path='popular' element={<TvSeriesList type={'popular'} />} />
								<Route path='trending' element={<TvSeriesList type={'trending'} />} />
								<Route path='topRated' element={<TvSeriesList type={'topRated'} />} />
								<Route path='onTheAir' element={<TvSeriesList type={'onTheAir'} />} />
							</Route>
							<Route path='persons' element={<PersonsPage />}>
								<Route path='popular' element={<PersonsList type={'popular'} />} />
							</Route>
							<Route path='movie/:movieId' element={<MoviePage />} />
							<Route path='person/:personId' element={<PersonPage />} />
							<Route path='tv/:tvId' element={<SeriesPage />} />
						</Route>
					</Routes>
				</BrowserRouter>
				<ReactQueryDevtools />
			</QueryClientProvider>
		</>
	);
}

export default App;
