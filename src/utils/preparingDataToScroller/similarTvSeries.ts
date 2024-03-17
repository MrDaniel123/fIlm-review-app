import { type SimilarTvSeries } from '../../types/similar/similarTvSeries';

type ScrollerDataType = {
	header: string;
	paragraph: string;
	imagePath: string;
	id: number;
};

export const similarTvSeries = (tvSeries: SimilarTvSeries) => {
	let similatMovies: ScrollerDataType[] = tvSeries.results.map(tvSeries => {
		return {
			header: tvSeries.name,
			paragraph: tvSeries.first_air_date,
			imagePath: tvSeries.poster_path,
			id: tvSeries.id,
		};
	});

	return similatMovies;
};
