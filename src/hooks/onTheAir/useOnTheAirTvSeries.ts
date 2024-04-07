import { useQuery } from '@tanstack/react-query';
import { getOnTheAirTvSeries } from '../../services/onTheAir/apiOnTheAir';

export const useOnTheAirTvSeries = () => {
	const { data, isLoading, isError } = useQuery({
		queryKey: ['onTheAir-tvSeries'],
		queryFn: getOnTheAirTvSeries,
	});
	return { data, isLoading, isError };
};
