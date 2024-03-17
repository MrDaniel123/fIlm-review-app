import { useQuery } from '@tanstack/react-query';
import { getSimilarTvSeries } from '../../services/similar/apiSimilar';

export const useSimilarTvSeries = (seriesId: string) => {
	const { data, isLoading, isError } = useQuery({
		queryKey: ['similar-tvSeries'],
		queryFn: () => getSimilarTvSeries(seriesId),
	});
	return { data, isLoading, isError };
};
