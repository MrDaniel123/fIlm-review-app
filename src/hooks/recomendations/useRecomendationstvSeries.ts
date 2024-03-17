import { useQuery } from '@tanstack/react-query';
import { getRecomendationsTvSeries } from '../../services/recomendations/ApiRecomendations';

export const useRecomendationsTvSeries = (SeriesId: string) => {
	const { data, isLoading, isError } = useQuery({
		queryKey: ['recomendations-tvSeries'],
		queryFn: () => getRecomendationsTvSeries(SeriesId),
	});
	return { data, isLoading, isError };
};
