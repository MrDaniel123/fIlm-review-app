import { useQuery } from '@tanstack/react-query';
import { getPopularTvSeries } from '../../services/popular/apiPopular';

export const usePopularTvSeries = (pageNumber: string) => {
	const { data, isLoading, isError } = useQuery({
		queryKey: [`popular-tvSeries:${pageNumber}`],
		queryFn: () => getPopularTvSeries(pageNumber),
	});

	return { data, isLoading, isError };
};
