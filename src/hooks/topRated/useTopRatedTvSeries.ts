import { useQuery } from '@tanstack/react-query';
import { getTopRatedTvSeries } from '../../services/topRated/apiToprated';

export const useTopRatedTvSeries = (pageNumber: string) => {
	const { data, isLoading, isError } = useQuery({
		queryKey: ['topRated-tvSeries'],
		queryFn: () => getTopRatedTvSeries(pageNumber),
	});
	return { data, isLoading, isError };
};
