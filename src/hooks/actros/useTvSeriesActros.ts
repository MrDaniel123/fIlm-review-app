import { useQuery } from '@tanstack/react-query';
import { getTvSeriesActros } from '../../services/actros/apiActros';

export const useTvSeriesActros = (tvSeriesId: string) => {
	const { data, isLoading, isError } = useQuery({
		queryKey: ['tvSeries-actros'],
		queryFn: () => getTvSeriesActros(tvSeriesId),
	});
	return { data, isLoading, isError };
};
