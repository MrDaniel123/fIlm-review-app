import { type RecomendationsTvSeries } from '../../types/recomendations/recomendationsTvSeriesType';

type ScrollerDataType = {
	header: string;
	paragraph: string;
	imagePath: string;
	id: number;
};

export const recomendationsTvSeries = (tvSeries: RecomendationsTvSeries) => {
	let recomendationtvSeries: ScrollerDataType[] = tvSeries.results.map(tvSeries => {
		return {
			header: tvSeries.name,
			paragraph: tvSeries.first_air_date,
			imagePath: tvSeries.poster_path,
			id: tvSeries.id,
		};
	});

	return recomendationtvSeries;
};
