import { useQuery } from '@tanstack/react-query';
import { getUpcomingMovies } from '../../services/upcoming/apiUpcoming';

export const useUpComingMovies = () => {
	const { data, isLoading, isError } = useQuery({
		queryKey: ['upcoming-movies'],
		queryFn: getUpcomingMovies,
	});
	return { data, isLoading, isError };
};
