import { PopularActros } from '../../types/popular/actros';

type ScrollerDataType = {
	header: string;
	paragraph: string;
	imagePath: string;
	id: number;
};

export const popularActros = (movies: PopularActros) => {
	let popularActros: ScrollerDataType[] = movies.results.map(actor => {
		return {
			header: actor.name,
			paragraph: '',
			imagePath: actor.profile_path,
			id: actor.id,
		};
	});

	return popularActros;
};
