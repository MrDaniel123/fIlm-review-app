import { useQuery } from '@tanstack/react-query';
import { trendingMovies } from '../services/trendingMovies';

export const useTrendingMovies = () => {
	const { data, isLoading, isError } = useQuery({
		queryKey: ['trending-movies'],
		queryFn: trendingMovies,
	});
	return { data, isLoading, isError };
};
