import { useQuery } from '@tanstack/react-query';
import { getTopRatedTvSeries } from '../../services/topRated/apiToprated';

export const useTopRatedTvSeries = () => {
	const { data, isLoading, isError } = useQuery({
		queryKey: ['topRated-tvSeries'],
		queryFn: getTopRatedTvSeries,
	});
	return { data, isLoading, isError };
};
