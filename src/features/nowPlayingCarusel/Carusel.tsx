import React, { useState } from 'react';
import styled from 'styled-components';
import { NowPLaing, result } from '../../types/nowPLayingType';

const arrow = require('../../assets/arrow.png');
const dot = require('../../assets/dot.png');

const CaruselWrapper = styled.div<{ imageLink: string }>`
	display: grid;
	grid-template-columns: auto 1fr;
	grid-template-rows: 40px 1fr 50px 20px;
	justify-items: center;
	align-items: center;
	padding: 12px;
	min-width: 320px;
	background-image: url(${props => props.imageLink});
	background-size: cover;
	border-radius: 16px;
`;

const Image = styled.img`
	grid-column: 1/2;
	grid-row: 1/7;
	width: 120px;
	height: 200px;
	border-radius: 16px;
`;

const Title = styled.h3`
	font-size: 1.6rem;
	color: #fff;
	padding: 0.5rem 3rem;
	border-radius: 50px;
	background-color: #0000003a;
`;

const Description = styled.p`
	margin: 1rem;
	font-size: 12px;
	color: #fff;
	padding: 1rem;
	border-radius: 8px;
	background-color: #0000003a;
`;

const NavigationWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-around;
	width: 100%;
`;

const PreviewWiewBtn = styled.button`
	all: unset;
`;
const NextWiewBtn = styled.button`
	all: unset;
	transform: rotate(180deg);
`;

const MoreButton = styled.button`
	all: unset;
	padding: 1rem;
	background-color: #ffffffaf;
	color: #000;
	font-size: 14px;
	border-radius: 12px;
`;

const RadioDotButton = styled.button`
	all: unset;
`;

interface Props {
	data: NowPLaing;
}

function generateCurentResult(data: NowPLaing) {
	const results = data.results.filter(result => {
		if (result.title && result.overview && result.backdrop_path && result.poster_path)
			return result;
	});

	return results.slice(0, 5);
}

function Carusel({ data }: Props) {
	const [caruselIndex, setCaruselIndex] = useState(0);
	const results = generateCurentResult(data);

	const handleIncrementCaruselIndex = () => {
		if (results.length - 1 === caruselIndex) return null;
		setCaruselIndex(caruselIndex + 1);
	};

	const handleDecrementCaruselIndex = () => {
		if (caruselIndex === 0) return null;
		setCaruselIndex(caruselIndex - 1);
	};

	return (
		<CaruselWrapper
			imageLink={`https://image.tmdb.org/t/p/original${results[caruselIndex].backdrop_path}`}>
			<Image src={`https://image.tmdb.org/t/p/w500${results[caruselIndex].poster_path}`} />
			<Title>{results[caruselIndex].title}</Title>
			<Description>{results[caruselIndex].overview.slice(0, 120)}...</Description>
			<NavigationWrapper>
				<PreviewWiewBtn onClick={handleDecrementCaruselIndex}>
					<img src={arrow} alt='' />
				</PreviewWiewBtn>
				<MoreButton>See More...</MoreButton>
				<NextWiewBtn onClick={handleIncrementCaruselIndex}>
					<img src={arrow} alt='' />
				</NextWiewBtn>
			</NavigationWrapper>

			<NavigationWrapper>
				<RadioDotButton>
					<img src={dot} alt='' />
				</RadioDotButton>
				<RadioDotButton>
					<img src={dot} alt='' />
				</RadioDotButton>
				<RadioDotButton>
					<img src={dot} alt='' />
				</RadioDotButton>
				<RadioDotButton>
					<img src={dot} alt='' />
				</RadioDotButton>
				<RadioDotButton>
					<img src={dot} alt='' />
				</RadioDotButton>
			</NavigationWrapper>
		</CaruselWrapper>
	);
}

export default Carusel;
