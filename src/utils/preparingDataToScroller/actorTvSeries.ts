import { type ActortvSeries } from '../../types/actors/actroTvSeries';

type ScrollerDataType = {
	header: string;
	paragraph: string;
	imagePath: string;
	id: number;
};

export const preparingActorTvSeriestoScroller = (tvSeries: ActortvSeries) => {
	let actorsData: ScrollerDataType[] = tvSeries.cast.map(tvSeries => {
		return {
			header: tvSeries.name,
			paragraph: tvSeries.first_air_date,
			imagePath: tvSeries.poster_path,
			id: tvSeries.id,
		};
	});

	return actorsData.slice(0, 20);
};
