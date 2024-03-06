import { useQuery } from '@tanstack/react-query';
import { getActrosFromMovie } from '../services/apiMovie';

export const useActrosFromMovie = (movieId: string) => {
	const { data, isLoading, isError } = useQuery({
		queryKey: ['actros-from-movie'],
		queryFn: () => getActrosFromMovie(movieId),
	});
	return { data, isLoading, isError };
};
