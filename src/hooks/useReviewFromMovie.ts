import { useQuery } from '@tanstack/react-query';
import { getReviewFromMovie } from '../services/apiMovie';

export const useReviewFromMovie = (movieId: string) => {
	const { data, isLoading, isError } = useQuery({
		queryKey: ['review-drom-movie'],
		queryFn: () => getReviewFromMovie(movieId),
	});
	return { data, isLoading, isError };
};
