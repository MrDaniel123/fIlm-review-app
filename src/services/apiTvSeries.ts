import axios from 'axios';

import { type TrendingTvSeriesResponse } from '../types/trendindTvSeries';

import { trendingTvSeriesUrl } from './tmdbService';

export const getTrendingTvSeries = async () => {
	const response = await axios.get<TrendingTvSeriesResponse>(trendingTvSeriesUrl);

	return response.data;
};
