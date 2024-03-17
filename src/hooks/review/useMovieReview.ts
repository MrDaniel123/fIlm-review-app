import { useQuery } from '@tanstack/react-query';
import { getMovieReview } from '../../services/review/apiReview';

export const useMovieReview = (movieId: string) => {
	const { data, isLoading, isError } = useQuery({
		queryKey: ['movie-review'],
		queryFn: () => getMovieReview(movieId),
	});
	return { data, isLoading, isError };
};
