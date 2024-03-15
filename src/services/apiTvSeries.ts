import axios from 'axios';

import { type TrendingTvSeriesResponse } from '../types/trendindTvSeries';
import { type TvSeriesbyIdResponseType } from '../types/tvSeriesByIdType';

import { tmdbKey, trendingTvSeriesUrl } from './tmdbService';
import { tvSeriesByIdUrl } from './tmdbService';

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
