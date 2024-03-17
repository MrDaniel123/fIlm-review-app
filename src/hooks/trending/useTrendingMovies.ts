import { useQuery } from '@tanstack/react-query';
import { getTrendingMovies } from '../../services/trending/apiTrending';

export const useTrendingMovies = () => {
	const { data, isLoading, isError } = useQuery({
		queryKey: ['trending-movies'],
		queryFn: getTrendingMovies,
	});

	return { data, isLoading, isError };
};
