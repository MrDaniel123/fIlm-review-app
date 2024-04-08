export type MultiSearchResult = {
	adult: boolean;
	backdrop_path: string;
	id: number;
	title?: string;
	original_language: string;
	original_title: string;
	overview: string;
	poster_path?: string;
	profile_path?: string;
	media_type: string;
	genre_ids: number[];
	popularity: number;
	release_date: string;
	video: boolean;
	vote_average: number;
	vote_count: number;
	name?: string;
};

export type MultiSearch = {
	page: number;
	results: MultiSearchResult[];
	total_pages: number;
	totalResults: number;
};
