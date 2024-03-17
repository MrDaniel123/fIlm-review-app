import { useQuery } from '@tanstack/react-query';
import { getTrendingTvSeries } from '../../services/trending/apiTrending';

export const useTrendingTvSeries = () => {
	const { data, isLoading, isError } = useQuery({
		queryKey: ['trending-tvSeries'],
		queryFn: getTrendingTvSeries,
	});
	return { data, isLoading, isError };
};
