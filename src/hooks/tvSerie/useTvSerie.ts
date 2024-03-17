import { useQuery } from '@tanstack/react-query';
import { getTvSerie } from '../../services/tvSerie/apiTvSerie';

export const useTvSerie = (tvSerieId: string) => {
	const { data, isLoading, isError } = useQuery({
		queryKey: ['tvSerie'],
		queryFn: () => getTvSerie(tvSerieId),
	});
	return { data, isLoading, isError };
};
