import { useQuery } from '@tanstack/react-query';

import { getPopularActros } from '../services/apiPeople';

export const usePopularActres = () => {
	const { data, isLoading, isError } = useQuery({
		queryKey: ['popular-actres'],
		queryFn: getPopularActros,
	});

	return { data, isError, isLoading };
};
