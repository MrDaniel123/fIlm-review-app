import { ActrosType } from '../../types/actors/actrosType';

type ScrollerDataType = {
	header: string;
	paragraph: string;
	imagePath: string;
	id: number;
};

export const preparingActorsDataToScroller = (actors: ActrosType) => {
	let actorsData: ScrollerDataType[] = actors.cast.map(actor => {
		return {
			header: actor.name,
			paragraph: '',
			imagePath: actor.profile_path,
			id: actor.id,
		};
	});

	return actorsData;
};
