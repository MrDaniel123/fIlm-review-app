import axios from 'axios';
import {
	NowPlayingMovieUrl,
	tmdbKey,
	movieByIdUrl,
	popularMoviesUrl,
	trendingMoviesUrl,
	actrosFromMovieUrl,
	movieUrl,
} from './tmdbService';

import { NowPlaingMovie } from '../types/nowPLayingMovieType';
// import { ActrosListType } from '../types/actors/actrosType';
// import { MovieById } from '../types/movie/movieType';

import { ReviewType } from '../types/review/reviewType';
// import { RecomendationsMovieType } from '../types/recomendations/recomendationsMovieType';
// import { SimilarMovietType } from '../types/similar/similarMovies';
// import { GalleryType } from '../types/images/imagesType';

export const getNowPlayingMovieMovies = async () => {
	const response = await axios.get<NowPlaingMovie>(`${NowPlayingMovieUrl}?&api_key=${tmdbKey}`);

	return response.data;
};

// export const getMovieById = async (movieId: string) => {
// 	const response = await axios.get<MovieById>(`${movieByIdUrl}${movieId}?&api_key=${tmdbKey}`);

// 	return response.data;
// };

// export const getPopularMovies = async () => {
// 	const response = await axios.get<PopulatMoviesResponse>(
// 		`${popularMoviesUrl}?&api_key=${tmdbKey}`
// 	);

// 	return response.data;
// };

// export const getTrendingMovies = async () => {
// 	const response = await axios.get<TrendingMoviesResponse>(
// 		`${trendingMoviesUrl}?&api_key=${tmdbKey}`
// 	);

// 	return response.data;
// };

// export const getActrosFromMovie = async (movieId: string) => {
// 	const response = await axios.get<ActrosListType>(
// 		`${actrosFromMovieUrl}${movieId}/credits?language=en-US%3F&api_key=${tmdbKey}`
// 	);

// 	return response.data;
// };

// export const getReviewFromMovie = async (movieId: string) => {
// 	const response = await axios.get<ReviewType>(
// 		`${movieUrl}${movieId}/reviews?language=en-US&page=1&api_key=${tmdbKey}`
// 	);
// 	return response.data;
// };

// export const getRecomendationsFromMovie = async (movieId: string) => {
// 	const response = await axios.get<RecomendationsMovieType>(
// 		`${movieUrl}${movieId}/recommendations?language=en-US&page=1&api_key=${tmdbKey}`
// 	);
// 	return response.data;
// };

// export const getSimilarMovies = async (movieId: string) => {
// 	const response = await axios.get<SimilarMovietType>(
// 		`${movieUrl}${movieId}/similar?language=en-US&page=1?&api_key=${tmdbKey}`
// 	);
// 	return response.data;
// };

// export const getImages = async (movieId: string) => {
// 	const response = await axios.get<GalleryType>(`${movieUrl}${movieId}/images?&api_key=${tmdbKey}`);
// 	return response.data;
// };
