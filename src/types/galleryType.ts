export type ImageType = {
	aspect_ratio: number;
	height: number;
	iso_639_1: boolean;
	file_path: string;
	vote_average: number;
	vote_count: number;
	width: number;
};

export type GalleryType = {
	backdrops: ImageType[];
	id: number;
	logos: ImageType[];
	posters: ImageType[];
};
