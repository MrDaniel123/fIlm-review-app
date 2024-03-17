import React, { useState } from 'react';
import styled from 'styled-components';
import { ImageType } from '../../types/images/imagesType';

import GaleryWindow from './GaleryWindow';
import ImageItem from './ImageItem';

const StyledImageSLider = styled.section`
	display: flex;
	gap: 2rem;
	flex-wrap: wrap;
	max-width: 1280px;
	width: 90%;
	height: 300px;
	z-index: 10;
`;

const Header = styled.h2`
	font-size: var(--font-header);
`;

const ItemsWrapper = styled.div`
	display: flex;
	align-items: center;
	overflow-x: scroll;
	padding: 0 2rem;

	gap: 2rem;
`;

type ImageSliderProps = {
	data: ImageType[];
};

function ImageSlider({ data }: ImageSliderProps) {
	const [showGalleryWindow, setShowGalleryWindow] = useState(false);

	const handleShowGalleryWindow = (imageIndex?: number) => {
		setShowGalleryWindow(prevState => !prevState);
	};

	const renderImageItems = data.map((image, index) => (
		<ImageItem
			key={image.file_path}
			imgPath={image.file_path}
			onClickHandler={handleShowGalleryWindow}
			imageIndex={index}
		/>
	));

	return (
		<StyledImageSLider>
			<Header>Image gallery</Header>
			<ItemsWrapper>{renderImageItems}</ItemsWrapper>
			{showGalleryWindow && <GaleryWindow hideFn={handleShowGalleryWindow} images={data} />}
		</StyledImageSLider>
	);
}

export default ImageSlider;
