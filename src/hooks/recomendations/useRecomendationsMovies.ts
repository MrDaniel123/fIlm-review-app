import { useQuery } from '@tanstack/react-query';
import { getRecomendationsMovies } from '../../services/recomendations/ApiRecomendations';

export const useRecomendationMovies = (movieId: string) => {
	const { data, isLoading, isError } = useQuery({
		queryKey: ['recomendations-movies'],
		queryFn: () => getRecomendationsMovies(movieId),
	});
	return { data, isLoading, isError };
};
