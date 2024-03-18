import { type ActorFilmography } from '../../types/actors/actorFilmography';

type ScrollerDataType = {
	header: string;
	paragraph: string;
	imagePath: string;
	id: number;
};

export const preparingActorFilmographyToScroller = (movie: ActorFilmography) => {
	let actorsData: ScrollerDataType[] = movie.cast.map(movie => {
		return {
			header: movie.title,
			paragraph: movie.release_date,
			imagePath: movie.poster_path,
			id: movie.id,
		};
	});

	return actorsData;
};
