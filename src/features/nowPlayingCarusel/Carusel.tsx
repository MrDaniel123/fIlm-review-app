import React, { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { NowPLaing, result } from '../../types/nowPLayingType';

import { breakPoint } from '../../styles/breakpoints';

const arrow = require('../../assets/arrow.png');
const dot = require('../../assets/dot.png');

const slowShowing = keyframes`
from{
	opacity: 0;
	transform: translateY(-15px);
}
to{
	opacity: 1;
	transform: translateY(0);
}
`;

const slowShowingImage = keyframes`
from{
	opacity: 0;

}
to{
	opacity: 1;

}
`;

const CaruselWrapper = styled.div`
	display: grid;
	grid-template-columns: auto 1fr;
	grid-template-rows: 2fr 7fr 3fr 1fr;
	justify-items: center;
	align-items: center;
	position: relative;
	gap: 5px;
	padding: 12px;
	min-width: 320px;
	width: 90vw;
	max-width: 1440px;
	min-height: 220px;
	border-radius: 16px;

	@media (min-width: ${breakPoint.small}px) {
		min-height: 360px;
	}
	@media (min-width: ${breakPoint.large}px) {
		min-height: 480px;
	}

	background-color: #00000027;
`;

const BackGroundImage = styled.img`
	position: absolute;
	z-index: -1;
	left: 0;
	top: 0;
	width: 100%;
	height: 100%;
	object-fit: cover;
	animation: ${slowShowingImage} 0.6s ease-in-out;

	border-radius: 16px;
`;

const Image = styled.img`
	grid-column: 1/2;
	grid-row: 1/7;
	width: 140px;
	height: 220px;
	border-radius: 12px;
	animation: ${slowShowingImage} 0.6s ease-in-out;

	@media (min-width: ${breakPoint.small}px) {
		width: 160px;
		height: 240px;
	}

	@media (min-width: ${breakPoint.medium}px) {
		width: 220px;
		height: 300px;
	}

	@media (min-width: ${breakPoint.large}px) {
		width: 320px;
		height: 440px;
	}
`;

const Title = styled.h3`
	font-size: 1.2rem;
	color: #fff;
	padding: 0.5rem 3rem;
	border-radius: 50px;
	text-transform: uppercase;
	background-color: #000000b3;

	animation: ${slowShowing} 0.6s ease-in-out;

	@media (min-width: ${breakPoint.small}px) {
		font-size: 2.2rem;
	}

	@media (min-width: ${breakPoint.large}px) {
		font-size: 3.6rem;
	}
`;

const Description = styled.p`
	margin: 1rem;
	font-size: 12px;
	color: #fff;
	padding: 1rem;
	border-radius: 12px;
	background-color: #000000b3;
	max-width: 600px;

	animation: ${slowShowing} 0.6s ease-in-out;
	@media (min-width: ${breakPoint.small}px) {
		font-size: 2rem;
	}

	@media (min-width: ${breakPoint.large}px) {
		font-size: 2.4rem;
	}
`;

const NavigationWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-around;
	width: 100%;
`;

const DotNavigationWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 1rem;
	width: 100%;

	@media (min-width: ${breakPoint.medium}px) {
		gap: 2rem;
	}
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
	background-color: #ffffffaf;
	color: #000;
	font-size: 14px;
	border-radius: 12px;
	cursor: pointer;
	transition: 0.3s;

	&:hover {
		transform: scale(1.4);
	}
`;

const RadioDotButton = styled.button`
	all: unset;
	cursor: pointer;

	& img {
		transition: 0.3s;
		&:hover {
			transform: scale(1.6);
		}
	}
`;

interface Props {
	data: NowPLaing;
}

function generateCurentResult(data: NowPLaing) {
	const results = data.results.filter(result => {
		if (result.title && result.overview && result.backdrop_path && result.poster_path)
			return result;
	});

	return results.slice(0, 6);
}

function Carusel({ data }: Props) {
	const [caruselIndex, setCaruselIndex] = useState(0);
	const [windowWidth, setWindowWitch] = useState<number>(window.innerWidth);
	const results = generateCurentResult(data);

	useEffect(() => {
		const handleResizeWindow = () => setWindowWitch(window.innerWidth);
		window.addEventListener('resize', handleResizeWindow);
	}, []);

	const handleIncrementCaruselIndex = () => {
		if (results.length - 1 === caruselIndex) return null;
		setCaruselIndex(caruselIndex + 1);
	};

	const handleDecrementCaruselIndex = () => {
		if (caruselIndex === 0) return null;
		setCaruselIndex(caruselIndex - 1);
	};

	const handleChangeSlide = (index: number) => {
		setCaruselIndex(index);
	};

	const dotButtonRender = results.map((result, index) => (
		<RadioDotButton key={result.id} onClick={() => handleChangeSlide(index)}>
			<img src={dot} alt={`Cange view wariant to ${index} `} />
		</RadioDotButton>
	));

	let descriptionlength = results[caruselIndex].overview.slice(0, 100);

	if (windowWidth > Number(breakPoint.large)) {
		descriptionlength = results[caruselIndex].overview.slice(0, 300);
	} else if (windowWidth > Number(breakPoint.medium)) {
		descriptionlength = results[caruselIndex].overview.slice(0, 200);
	}

	return (
		<CaruselWrapper>
			<BackGroundImage
				key={results[caruselIndex].id}
				src={`https://image.tmdb.org/t/p/original${results[caruselIndex].backdrop_path}`}
			/>
			<Image
				key={results[caruselIndex].vote_average}
				src={`https://image.tmdb.org/t/p/w500${results[caruselIndex].poster_path}`}
			/>
			<Title key={results[caruselIndex].title.slice(0, 10)}>
				{results[caruselIndex].title.slice(0, 20)}
			</Title>

			<Description key={descriptionlength.slice(0, 10)}>{descriptionlength}...</Description>
			<NavigationWrapper>
				<PreviewWiewBtn onClick={handleDecrementCaruselIndex}>
					<img src={arrow} alt='' />
				</PreviewWiewBtn>
				<MoreButton>See More...</MoreButton>
				<NextWiewBtn onClick={handleIncrementCaruselIndex}>
					<img src={arrow} alt='' />
				</NextWiewBtn>
			</NavigationWrapper>

			<DotNavigationWrapper>{dotButtonRender}</DotNavigationWrapper>
		</CaruselWrapper>
	);
}

export default Carusel;
