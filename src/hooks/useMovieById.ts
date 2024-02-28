import { useQuery } from '@tanstack/react-query';
import { getMovieById } from '../services/apiMovie';

export const useMovieById = (movieId: string) => {
	const { data, isLoading, isError } = useQuery({
		queryKey: ['movie-by-id'],
		queryFn: () => getMovieById(movieId),
	});
	return { data, isLoading, isError };
};
