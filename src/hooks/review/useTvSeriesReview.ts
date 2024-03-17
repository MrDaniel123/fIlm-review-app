import { useQuery } from '@tanstack/react-query';
import { getTvSeriesReview } from '../../services/review/apiReview';

export const useTvSeriesReview = (tvSeriesId: string) => {
	const { data, isLoading, isError } = useQuery({
		queryKey: ['tvSeries-review'],
		queryFn: () => getTvSeriesReview(tvSeriesId),
	});
	return { data, isLoading, isError };
};
