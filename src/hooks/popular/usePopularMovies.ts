import { useQuery } from '@tanstack/react-query';
import { getPopularMovies } from '../../services/popular/apiPopular';

export const usePopularMovies = (pageNumber: string) => {
	const { data, isLoading, isError } = useQuery({
		queryKey: ['popular-movies'],
		queryFn: () => getPopularMovies(pageNumber),
	});

	return { data, isLoading, isError };
};
