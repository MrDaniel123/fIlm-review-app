import React, { useState } from 'react';
import styled, { css } from 'styled-components';

import { ImageType } from '../../types/galleryType';
import ImageItem from './ImageItem';
import { breakPoint } from '../../styles/style';
import CloseButton from './CloseButton';
import ImageCarusel from './ImageCarusel';

const StyledGaleryWindow = styled.div`
	position: fixed;
	left: 0;
	top: 0;
	width: 100%;
	height: 100%;
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	align-items: center;

	z-index: 9999;
	background-color: var(--color-black-filter);
`;

const ImagesWrapper = styled.div`
	display: flex;
	align-items: center;
	overflow-x: scroll;
	padding: 0 2rem;

	gap: 2rem;
	width: 90%;
`;

type GalleryInfoProps = {
	hideFn: () => void;
	images: ImageType[];
};

function GaleryWindow({ hideFn, images }: GalleryInfoProps) {
	const [ImageIndex, setImageIndex] = useState(0);

	const handleChangeImageIndex = (imageIndex: number) => {
		setImageIndex(imageIndex);
	};

	const renderImageItems = images.map((image, index) => (
		<ImageItem
			key={image.file_path}
			imgPath={image.file_path}
			imageIndex={index}
			onClickHandler={handleChangeImageIndex}
			showInWindow={true}
		/>
	));

	const handleChangeImage = (type: string) => {
		if (type === 'increase' && ImageIndex < images.length - 1) {
			setImageIndex(prevState => prevState + 1);
		} else if (type === 'decrease' && ImageIndex !== 0) {
			console.log(ImageIndex, images.length - 1);
			setImageIndex(prevState => prevState - 1);
		}
	};

	return (
		<StyledGaleryWindow>
			<CloseButton onClickFn={hideFn} />

			<ImageCarusel
				imagePath={`https://image.tmdb.org/t/p/original/${images[ImageIndex].file_path}`}
				onCLickFn={handleChangeImage}
			/>
			<ImagesWrapper>{renderImageItems}</ImagesWrapper>
		</StyledGaleryWindow>
	);
}

export default GaleryWindow;
