import { useQuery } from '@tanstack/react-query';
import { getPopularTvSeries } from '../../services/popular/apiPopular';

export const usePopularTvSeries = () => {
	const { data, isLoading, isError } = useQuery({
		queryKey: ['popular-tvSeries'],
		queryFn: getPopularTvSeries,
	});

	return { data, isLoading, isError };
};
