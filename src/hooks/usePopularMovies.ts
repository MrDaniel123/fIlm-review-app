import { useQuery } from '@tanstack/react-query';
import { popularMovies } from '../services/populatMovies';

export const usePopularMovies = () => {
	const { data, isLoading, isError } = useQuery({
		queryKey: ['popular-movies'],
		queryFn: popularMovies,
	});
	return { data, isLoading, isError };
};
