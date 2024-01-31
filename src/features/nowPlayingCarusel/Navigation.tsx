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

const PreviewWiewBtn = styled.button`
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
const NextWiewBtn = styled.button`
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

const MoreButton = styled.button`
	all: unset;
	padding: 1rem;
	background-color: ${colors.buttonWhite};
	color: ${colors.fontBlack};
	font-size: ${fontSizes.small};
	border-radius: 12px;
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
			<PreviewWiewBtn onClick={previewSlide}>
				<img src={arrow} alt='' />
			</PreviewWiewBtn>
			<MoreButton>See More...</MoreButton>
			<NextWiewBtn onClick={nextSlide}>
				<img src={arrow} alt='' />
			</NextWiewBtn>
		</NavigationWrapper>
	);
}

export default Navigation;
