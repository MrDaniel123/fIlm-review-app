import { useQuery } from '@tanstack/react-query';
import { getTvSeriesImage } from '../services/apiTvSeries';

export const useTvSeriesImage = (tvSeriesId: string) => {
	const { data, isLoading, isError } = useQuery({
		queryKey: ['image-tvSeries'],
		queryFn: () => getTvSeriesImage(tvSeriesId),
	});
	return { data, isLoading, isError };
};
