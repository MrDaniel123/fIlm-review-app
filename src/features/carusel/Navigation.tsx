import React from 'react';
import styled from 'styled-components';
import { breakPoint, colors, fontSizes } from '../../styles/style';

const arrow = require('../../assets/arrow.png');

const NavigationWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-around;
	width: 100%;
`;

const BackSlideBtn = styled.button`
	all: unset;
	cursor: pointer;
	transition: 0.3s;

	& img {
		@media (min-width: ${breakPoint.large}px) {
			height: 50px;
		}
	}

	&:hover {
		transform: scale(1.4);
	}
`;
const NextSlideBtn = styled.button`
	all: unset;
	transform: rotate(180deg);
	cursor: pointer;
	transition: 0.3s;

	& img {
		@media (min-width: ${breakPoint.large}px) {
			height: 50px;
		}
	}

	&:hover {
		transform: scale(1.4) rotate(180deg);
	}
`;

const SeeMoreButton = styled.button`
	all: unset;
	padding: 1rem;
	background-color: ${colors.buttonWhite};
	color: ${colors.fontBlack};
	font-size: ${fontSizes.small};
	border-radius: var(--border-radius-medium);
	cursor: pointer;
	transition: 0.3s;

	&:hover {
		transform: scale(1.4);
	}
`;

interface Props {
	nextSlide: () => void;
	previewSlide: () => void;
}

function Navigation({ nextSlide, previewSlide }: Props) {
	return (
		<NavigationWrapper>
			<BackSlideBtn onClick={previewSlide}>
				<img src={arrow} alt='' />
			</BackSlideBtn>
			<SeeMoreButton>See More...</SeeMoreButton>
			<NextSlideBtn onClick={nextSlide}>
				<img src={arrow} alt='' />
			</NextSlideBtn>
		</NavigationWrapper>
	);
}

export default Navigation;
