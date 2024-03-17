import { TvSerieType } from '../../types/tvSerie/tvSerieType';

type Genres = {
	id: number;
	name: string;
};

type HeaderCardDataType = {
	backDropImagePath: string;
	posterPath: string;
	header: string;
	description: string;
	genres: Genres[];
	vote: number;
	popularity: number;
	firstAirDate: string;
	lastAirDate: string;
	productionCompany: string;
};

export const preparingTvSerieData = (tvSerie: TvSerieType) => {
	let company = '';
	let genres: Genres[] = [];

	if (tvSerie.genres.length > 0) {
		genres = tvSerie.genres.map(genre => {
			return {
				id: genre.id,
				name: genre.name,
			};
		});
	}

	if (tvSerie.networks.length > 0) {
		company = tvSerie.networks[0].name;
	}

	const tvSerieData: HeaderCardDataType = {
		backDropImagePath: tvSerie.backdrop_path,
		posterPath: tvSerie.poster_path,
		header: tvSerie.name,
		description: tvSerie.overview,
		genres: genres,
		vote: tvSerie.vote_average,
		popularity: tvSerie.popularity,
		firstAirDate: tvSerie.first_air_date,
		lastAirDate: tvSerie.last_air_date,
		productionCompany: company,
	};

	return tvSerieData;
};
