import { useQuery } from '@tanstack/react-query';
import { getMovieActros } from '../../services/actros/apiActros';

export const useMovieActros = (movieId: string) => {
	const { data, isLoading, isError } = useQuery({
		queryKey: ['movie-actros'],
		queryFn: () => getMovieActros(movieId),
	});
	return { data, isLoading, isError };
};
