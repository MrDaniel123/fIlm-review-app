import { useQuery } from '@tanstack/react-query';
import { getPopularMovies } from '../services/apiMovie';

export const usePopularMovies = () => {
	const { data, isLoading, isError } = useQuery({
		queryKey: ['popular-movies'],
		queryFn: getPopularMovies,
	});
	return { data, isLoading, isError };
};
