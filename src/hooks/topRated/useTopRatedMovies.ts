import { useQuery } from '@tanstack/react-query';
import { getTopratedMovies } from '../../services/topRated/apiToprated';

export const useTopRatedMovies = (pageNumber: string) => {
	const { data, isLoading, isError } = useQuery({
		queryKey: [`topRated-movies:${pageNumber}`],
		queryFn: () => getTopratedMovies(pageNumber),
	});
	return { data, isLoading, isError };
};
