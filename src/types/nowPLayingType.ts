export interface result {
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
}

export interface NowPLaing {
	dates: [maximum: string, minmum: string];
	page: number;
	results: result[];
	total_pages: number;
	total_results: number;
}
