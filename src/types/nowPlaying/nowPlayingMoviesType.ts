export type NowPlayingMovieResult = {
	adult: boolean;
	backdrop_path: string;
	genre_ids: [number, number];
	id: number;
	original_language: string;
	original_titl: string;
	overview: string;
	popularity: number;
	poster_path: string;
	release_date: string;
	title: string;
	video: boolean;
	vote_average: number;
	vote_count: number;
};

export type NowPlaingMovies = {
	dates: [maximum: string, minmum: string];
	page: number;
	results: NowPlayingMovieResult[];
	total_pages: number;
	total_results: number;
};
