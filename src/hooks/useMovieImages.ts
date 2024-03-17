import { useQuery } from '@tanstack/react-query';
import { getImages } from '../services/apiMovies';

export const useMoviesImages = (movieId: string) => {
	const { data, isError, isLoading } = useQuery({
		queryKey: ['movie-images'],
		queryFn: () => getImages(movieId),
	});
	return { data, isError, isLoading };
};
