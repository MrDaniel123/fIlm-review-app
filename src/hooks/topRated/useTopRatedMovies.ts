import { useQuery } from '@tanstack/react-query';
import { getTopratedMovies } from '../../services/topRated/apiToprated';

export const useTopRatedMovies = () => {
	const { data, isLoading, isError } = useQuery({
		queryKey: ['topRated-movies'],
		queryFn: getTopratedMovies,
	});
	return { data, isLoading, isError };
};
