import { useQuery } from '@tanstack/react-query';
import { getTvSeriesById } from '../services/apiTvSeries';

export const useTvSeriesById = (tvSeriesId: string) => {
	const { data, isLoading, isError } = useQuery({
		queryKey: ['tvSeries-by-id'],
		queryFn: () => getTvSeriesById(tvSeriesId),
	});
	return { data, isLoading, isError };
};
