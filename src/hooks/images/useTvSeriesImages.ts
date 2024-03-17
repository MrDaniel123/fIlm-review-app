import { useQuery } from '@tanstack/react-query';
import { getTvSeriesImage } from '../../services/images/apiImages';

export const useTvSeriesImages = (tvSeriesId: string) => {
	const { data, isLoading, isError } = useQuery({
		queryKey: ['image-tvSeries'],
		queryFn: () => getTvSeriesImage(tvSeriesId),
	});
	return { data, isLoading, isError };
};
