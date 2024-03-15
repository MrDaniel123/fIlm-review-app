import { useQuery } from '@tanstack/react-query';
import { getRecomendationsFromTvSeries } from '../services/apiTvSeries';

export const useRecomenDationsFromTvSeries = (SeriesId: string) => {
	const { data, isLoading, isError } = useQuery({
		queryKey: ['recomendations-from-tvSeries'],
		queryFn: () => getRecomendationsFromTvSeries(SeriesId),
	});
	return { data, isLoading, isError };
};
