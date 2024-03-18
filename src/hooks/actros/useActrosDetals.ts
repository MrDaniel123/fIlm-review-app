import { useQuery } from '@tanstack/react-query';
import { getActorDetals } from '../../services/actros/apiActros';

export const useActroDetals = (actorId: string) => {
	const { data, isLoading, isError } = useQuery({
		queryKey: ['actor-detals'],
		queryFn: () => getActorDetals(actorId),
	});
	return { data, isLoading, isError };
};
