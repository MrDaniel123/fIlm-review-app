import { useQuery } from '@tanstack/react-query';
import { getMovie } from '../../services/movie/apiMovie';

export const useMovie = (movieId: string) => {
	const { data, isLoading, isError } = useQuery({
		queryKey: ['movie'],
		queryFn: () => getMovie(movieId),
	});
	return { data, isLoading, isError };
};
