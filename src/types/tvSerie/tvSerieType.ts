type Creators = {
	id: number;
	credit_id: string;
	name: string;
	gender: number;
	profile_path: string;
};

type Genres = {
	id: number;
	name: string;
};

type LastEpisodeToAir = {
	id: number;
	name: string;
	overview: string;
	vote_average: number;
	vote_count: number;
	air_date: string;
	episode_number: number;
	episode_type: string;
	production_code: string;
	runtime: number;
	season_number: number;
	show_id: number;
	still_path: number;
};

type Networks = {
	id: number;
	logo_path: string;
	name: string;
	origin_country: string;
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

type Seasons = {
	air_date: string;
	episode_count: number;
	id: number;
	name: string;
	overview: string;
	poster_path: string;
	season_number: number;
	vote_average: number;
};

type SpokenLanguages = {
	english_name: string;
	iso_639_1: string;
	name: string;
};

export type TvSerieType = {
	adult: boolean;
	backdrop_path: string;
	created_by: Creators[];
	episode_run_time: string[];
	first_air_date: string;
	genres: Genres[];
	homepage: string;
	id: number;
	in_production: boolean;
	languages: string[];
	last_air_date: string;
	last_episode_to_air: LastEpisodeToAir;
	name: string;
	next_episode_to_air: boolean;
	networks: Networks[];
	number_of_episodes: number;
	number_of_seasons: number;
	origin_country: string[];
	original_language: string;
	original_name: string;
	overview: string;
	popularity: number;
	poster_path: string;
	production_companies: ProductionCompanies[];
	production_countries: ProductionCountries[];
	seasons: Seasons[];
	spoken_languages: SpokenLanguages[];
	status: string;
	tagline: string;
	type: string;
	vote_average: number;
	vote_count: number;
};
