import { useQuery } from '@tanstack/react-query';
import { getPopularActros } from '../../services/popular/apiPopular';

export const usePopularActros = () => {
	const { data, isLoading, isError } = useQuery({
		queryKey: ['popular-actros'],
		queryFn: getPopularActros,
	});

	return { data, isLoading, isError };
};
