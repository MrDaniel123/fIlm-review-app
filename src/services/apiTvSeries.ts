import axios from 'axios';

import { type TrendingTvSeriesResponse } from '../types/trendindTvSeries';
import { type TvSeriesbyIdResponseType } from '../types/tvSeriesByIdType';

import { tmdbKey, trendingTvSeriesUrl, tvSeriesActrosUrl } from './tmdbService';
import { tvSeriesByIdUrl } from './tmdbService';
import { ActrosListType } from '../types/actorsListType';
import { ReviewType } from '../types/reviewType';

export const getTrendingTvSeries = async () => {
	const response = await axios.get<TrendingTvSeriesResponse>(trendingTvSeriesUrl);

	return response.data;
};

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
