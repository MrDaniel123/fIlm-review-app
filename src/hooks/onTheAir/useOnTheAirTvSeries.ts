import { useQuery } from '@tanstack/react-query';
import { getOnTheAirTvSeries } from '../../services/onTheAir/apiOnTheAir';

export const useOnTheAirTvSeries = (pageNumber: string) => {
	const { data, isLoading, isError } = useQuery({
		queryKey: ['onTheAir-tvSeries'],
		queryFn: () => getOnTheAirTvSeries(pageNumber),
	});
	return { data, isLoading, isError };
};
