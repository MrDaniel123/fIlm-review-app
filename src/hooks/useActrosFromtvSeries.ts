import { useQuery } from '@tanstack/react-query';

import { getActrosFromTvSeries } from '../services/apiTvSeries';

export const useTvSeriesActrsoById = (tvSeriesId: string) => {
	const { data, isLoading, isError } = useQuery({
		queryKey: ['actros-from-tvSeries'],
		queryFn: () => getActrosFromTvSeries(tvSeriesId),
	});
	return { data, isLoading, isError };
};
