import { useQuery } from '@tanstack/react-query';
import { getSimilarMovies } from '../services/apiMovie';

export const useSimilarMovies = (movieId: string) => {
	const { data, isLoading, isError } = useQuery({
		queryKey: ['similar-movies'],
		queryFn: () => getSimilarMovies(movieId),
	});
	return { data, isLoading, isError };
};
