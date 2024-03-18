import { useQuery } from '@tanstack/react-query';
import { getActorFilmography } from '../../services/actros/apiActros';

export const useActorFilmography = (actorId: string) => {
	const { data, isLoading, isError } = useQuery({
		queryKey: ['actor-filmography'],
		queryFn: () => getActorFilmography(actorId),
	});
	return { data, isLoading, isError };
};
