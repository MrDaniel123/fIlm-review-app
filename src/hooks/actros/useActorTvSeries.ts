import { useQuery } from '@tanstack/react-query';
import { getActorTvSeries } from '../../services/actros/apiActros';

export const useActortvSeries = (actorId: string) => {
	const { data, isLoading, isError } = useQuery({
		queryKey: ['actor-tvSeries'],
		queryFn: () => getActorTvSeries(actorId),
	});
	return { data, isLoading, isError };
};
