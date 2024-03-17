import { useQuery } from '@tanstack/react-query';
import { getSimilarMowies } from '../../services/similar/apiSimilar';

export const useSimilarMovies = (movieId: string) => {
	const { data, isLoading, isError } = useQuery({
		queryKey: ['similar-movies'],
		queryFn: () => getSimilarMowies(movieId),
	});
	return { data, isLoading, isError };
};
