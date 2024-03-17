import { TrendingTvSeries } from '../../types/trending/tvSeries';

type ScrollerDataType = {
	header: string;
	paragraph: string;
	imagePath: string;
	id: number;
};

export const trendingTvSeries = (movies: TrendingTvSeries) => {
	let trendingMovies: ScrollerDataType[] = movies.results.map(tvSeries => {
		return {
			header: tvSeries.name,
			paragraph: tvSeries.first_air_date,
			imagePath: tvSeries.poster_path,
			id: tvSeries.id,
		};
	});

	return trendingMovies;
};
