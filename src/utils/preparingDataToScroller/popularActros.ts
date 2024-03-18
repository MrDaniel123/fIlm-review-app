import { PopularActros } from '../../types/popular/actros';

type ScrollerDataType = {
	header: string;
	paragraph: string;
	imagePath: string;
	id: number;
};

export const preparingPopularActros = (actors: PopularActros) => {
	let popularActros: ScrollerDataType[] = actors.results.map(actor => {
		return {
			header: actor.name,
			paragraph: '',
			imagePath: actor.profile_path,
			id: actor.id,
		};
	});

	return popularActros;
};
