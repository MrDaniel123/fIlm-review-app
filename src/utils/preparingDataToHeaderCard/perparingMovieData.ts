import { MovieType } from '../../types/movie/movieType';

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
	budget: number;
	revenue: number;
	date: string;
	runtime: number;
};

export const preparingMovieData = (movie: MovieType) => {
	let genres = movie.genres.map(genre => {
		return {
			id: genre.id,
			name: genre.name,
		};
	});

	const movieData: HeaderCardDataType = {
		backDropImagePath: movie.backdrop_path,
		posterPath: movie.poster_path,
		header: movie.title,
		description: movie.overview,
		genres: genres,
		vote: movie.vote_average,
		budget: movie.budget,
		revenue: movie.revenue,
		date: movie.release_date,
		runtime: movie.runtime,
	};

	return movieData;
};
