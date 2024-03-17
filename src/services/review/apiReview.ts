import axios from 'axios';
import { TMDB_KEY } from '../tmdnKey';

import { type ReviewType } from '../../types/review/reviewType';

const baseReviewMovieUrl = 'https://api.themoviedb.org/3/movie/';
const baseReviewTvSeriesUrl = 'https://api.themoviedb.org/3/tv/';

export const getMovieReview = async (movieId: string) => {
	const response = await axios.get<ReviewType>(
		`${baseReviewMovieUrl}${movieId}/reviews?language=en-US&page=1&api_key=${TMDB_KEY}`
	);

	return response.data;
};

export const getTvSeriesReview = async (tvSeriesId: string) => {
	const response = await axios.get<ReviewType>(
		`${baseReviewTvSeriesUrl}${tvSeriesId}/reviews?language=en-US&page=1&api_key=${TMDB_KEY}`
	);

	return response.data;
};
