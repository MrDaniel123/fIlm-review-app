import { useQuery } from '@tanstack/react-query';
import { movieById } from '../services/movieById';

export const useMovieById = (movieId: string | undefined) => {
	const { data, isLoading, isError } = useQuery({
		queryKey: ['movie-by-id'],
		queryFn: () => movieById(movieId),
	});
	return { data, isLoading, isError };
};
