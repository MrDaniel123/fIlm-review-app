import { useQuery } from '@tanstack/react-query';
import { getTrendingTvSeries } from '../services/apiTvSeries';

export const useTrendingTvSeries = () => {
	const { data, isLoading, isError } = useQuery({
		queryKey: ['trending-tv-series'],
		queryFn: getTrendingTvSeries,
	});
	return { data, isLoading, isError };
};
