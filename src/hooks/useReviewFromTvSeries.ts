import { useQuery } from '@tanstack/react-query';
import { getReviewFromTvSeries } from '../services/apiTvSeries';

export const useReviewFromTvSeries = (tvSeriesId: string) => {
	const { data, isLoading, isError } = useQuery({
		queryKey: ['review-from-tvSeries'],
		queryFn: () => getReviewFromTvSeries(tvSeriesId),
	});
	return { data, isLoading, isError };
};
