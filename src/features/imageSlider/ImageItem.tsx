import React from 'react';
import styled, { css } from 'styled-components';
import { breakPoint } from '../../styles/style';

const ImageWrapper = styled.div<{ inWindow?: boolean }>`
	height: 22rem;
	min-width: 22em;
	overflow: hidden;
	border-radius: var(--border-radius-medium);
	cursor: pointer;

	@media (max-width: ${breakPoint.large}px) {
		height: 18rem;
		min-width: 18rem;
	}

	${props =>
		props.inWindow &&
		css`
			height: 14rem;
			min-width: 14rem;
			margin-bottom: 16px;

			@media (max-width: ${breakPoint.large}px) {
				height: 14rem;
				min-width: 14rem;
			}
			@media (max-width: ${breakPoint.medium}px) {
				height: 10rem;
				min-width: 10rem;
			}
		`}

	& img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		transition: 0.5s ease;

		&:hover {
			transform: scale(1.2);
		}
	}
`;
type ImageItemType = {
	imgPath: string;
	imageIndex: number;
	onClickHandler: (imageIndex: number) => void;
	showInWindow?: boolean;
};

function ImageItem({ imgPath, imageIndex, onClickHandler, showInWindow }: ImageItemType) {
	return (
		<ImageWrapper onClick={() => onClickHandler(imageIndex)} inWindow={showInWindow}>
			<img
				src={`https://image.tmdb.org/t/p/w500${imgPath}`}
				alt='From Movie'
				// onClick={onClickHandler}
			/>
		</ImageWrapper>
	);
}

export default ImageItem;
