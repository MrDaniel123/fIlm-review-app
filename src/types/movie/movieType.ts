type Genres = {
	id: number;
	name: string;
};

type ProductionCompanies = {
	id: number;
	logo_path: string;
	name: string;
	origin_country: string;
};

type ProductionCountries = {
	iso_3166_1: string;
	name: string;
};

type SpokenLanguages = {
	english_name: string;
	iso_639_1: string;
	name: string;
};

type BelongsToCollection = {
	backdrop_path: string;
	id: number;
	name: string;
	poster_path: string;
};

export type MovieType = {
	adult: boolean;
	backdrop_path: string;
	belongs_to_collection: BelongsToCollection | null;
	budget: number;
	genres: Genres[];
	homepage: string;
	id: number;
	imdb_id: string;
	original_language: string;
	original_title: string;
	overview: string;
	popularity: number;
	poster_path: string;
	production_companies: ProductionCompanies[];
	production_countries: ProductionCountries[];
	release_date: string;
	revenue: number;
	runtime: number;
	spoken_languages: SpokenLanguages[];
	status: string;
	tagline: string;
	title: string;
	video: boolean;
	vote_average: number;
	vote_count: number;
};
