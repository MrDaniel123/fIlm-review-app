import { useQuery } from '@tanstack/react-query';
import { getRecomendationsFromMovie } from '../services/apiMovie';

export const useRecomendationsFromMovie = (movieId: string) => {
	const { data, isLoading, isError } = useQuery({
		queryKey: ['recomendations-from-movie'],
		queryFn: () => getRecomendationsFromMovie(movieId),
	});
	return { data, isLoading, isError };
};
