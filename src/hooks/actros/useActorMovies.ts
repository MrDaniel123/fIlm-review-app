import { useQuery } from '@tanstack/react-query';
import { getActorMovies } from '../../services/actros/apiActros';

export const useActorMovies = (actorId: string) => {
	const { data, isLoading, isError } = useQuery({
		queryKey: ['actor-movies'],
		queryFn: () => getActorMovies(actorId),
	});
	return { data, isLoading, isError };
};
