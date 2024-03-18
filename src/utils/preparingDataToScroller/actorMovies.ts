import { type ActorMovies } from '../../types/actors/actorMovies';

type ScrollerDataType = {
	header: string;
	paragraph: string;
	imagePath: string;
	id: number;
};

export const preparingActorMoviestoScroller = (movie: ActorMovies) => {
	let actorsData: ScrollerDataType[] = movie.cast.map(movie => {
		return {
			header: movie.title,
			paragraph: movie.release_date,
			imagePath: movie.poster_path,
			id: movie.id,
		};
	});

	return actorsData.slice(0, 20);
};
