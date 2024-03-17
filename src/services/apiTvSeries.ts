import axios from 'axios';

import { type TvSeriesbyIdResponseType } from '../types/tvSeriesByIdType';

import {
	tmdbKey,
	trendingTvSeriesUrl,
	tvSeriesActrosUrl,
	tvSeriesImageUrl,
	tvSeriesRecomendationUrl,
} from './tmdbService';
import { tvSeriesByIdUrl } from './tmdbService';
import { ActrosListType } from '../types/actorsListType';
import { ReviewType } from '../types/reviewType';
import { RecomendationsTvSeriesResponse } from '../types/recomendationsTvSeriesType';
import { SimilarTvSeriesResponse } from '../types/similarTvSeriesType';
import { GalleryType } from '../types/galleryType';

// export const getTrendingTvSeries = async () => {
// 	const response = await axios.get<TrendingTvSeriesResponse>(trendingTvSeriesUrl);

// 	return response.data;
// };

export const getTvSeriesById = async (id: string) => {
	const response = await axios.get<TvSeriesbyIdResponseType>(
		`${tvSeriesByIdUrl}${id}?language=en-US&api_key=${tmdbKey}`
	);

	return response.data;
};

export const getActrosFromTvSeries = async (tvSeriesId: string) => {
	const response = await axios.get<ActrosListType>(
		`${tvSeriesActrosUrl}${tvSeriesId}/credits?language=en-US%3F&api_key=${tmdbKey}`
	);

	return response.data;
};

export const getReviewFromTvSeries = async (tvSeriesId: string) => {
	const response = await axios.get<ReviewType>(
		`${tvSeriesActrosUrl}${tvSeriesId}/reviews?language=en-US&page=1&api_key=${tmdbKey}`
	);

	return response.data;
};

export const getRecomendationsFromTvSeries = async (tvSeriesId: string) => {
	const response = await axios.get<RecomendationsTvSeriesResponse>(
		`${tvSeriesRecomendationUrl}${tvSeriesId}/recommendations?language=en-US&page=1?&api_key=${tmdbKey}`
	);

	return response.data;
};

export const getSimilarTvSeries = async (tvSeriesId: string) => {
	const response = await axios.get<SimilarTvSeriesResponse>(
		`${tvSeriesRecomendationUrl}${tvSeriesId}/similar?language=en-US&page=1?&api_key=${tmdbKey}`
	);

	return response.data;
};

export const getTvSeriesImage = async (tvSeriesId: string) => {
	const response = await axios.get<GalleryType>(
		`${tvSeriesImageUrl}${tvSeriesId}/images?&api_key=${tmdbKey}`
	);

	return response.data;
};
