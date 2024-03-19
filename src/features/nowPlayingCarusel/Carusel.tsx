import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

import DotNavigation from './DotNavigation';
import Navigation from './Navigation';

import { breakPoint } from '../../styles/style';
import { PosterImage } from './PosterImage';
import { Description } from './Description';
import { BackgroundPoster } from './BackgroundPoster';
import { Title } from './Title';

import { type NowPlaingMovies } from '../../types/nowPlaying/nowPlayingMoviesType';

const StyledCarusel = styled(motion.div)`
	display: grid;
	grid-template-columns: auto 1fr;
	grid-template-rows: 2fr 7fr 3fr 1fr;
	justify-items: center;
	align-items: center;
	position: relative;
	gap: 0.5rem;
	padding: 12px;
	min-width: 320px;
	width: 90vw;
	max-width: 1440px;
	min-height: 220px;
	border-radius: var(--border-radius-small);
	overflow: hidden;

	@media (min-width: ${breakPoint.small}px) {
		min-height: 360px;
	}
	@media (min-width: ${breakPoint.large}px) {
		min-height: 480px;
	}
`;

type CaruselProps = {
	data: NowPlaingMovies;
};

function generateCurentResult(data: NowPlaingMovies) {
	const results = data.results.filter(result => {
		let returnetResult;
		if (result.title && result.overview && result.backdrop_path && result.poster_path) {
			returnetResult = result;
		}
		return returnetResult;
	});
	return results.slice(0, 6);
}

function Carusel({ data }: CaruselProps) {
	const [slideNumber, setSlideNumber] = useState(0);
	const [windowWidth, setWindowWitch] = useState<number>(window.innerWidth);
	const results = generateCurentResult(data);

	useEffect(() => {
		const handleResizeWindow = () => setWindowWitch(window.innerWidth);
		window.addEventListener('resize', handleResizeWindow);
	}, []);

	const handleNextSLide = () => {
		if (results.length - 1 === slideNumber) return null;
		setSlideNumber(slideNumber + 1);
	};

	const handlePreviewSlide = () => {
		if (slideNumber === 0) return null;
		setSlideNumber(slideNumber - 1);
	};

	const handleChangeSlide = (index: number) => {
		setSlideNumber(index);
	};

	let descriptionInDifrentSize = results[slideNumber].overview.slice(0, 100);

	if (windowWidth > Number(breakPoint.large)) {
		descriptionInDifrentSize = results[slideNumber].overview.slice(0, 300);
	} else if (windowWidth > Number(breakPoint.large)) {
		descriptionInDifrentSize = results[slideNumber].overview.slice(0, 200);
	}

	return (
		<StyledCarusel initial={{ x: 120 }} animate={{ x: 0 }} transition={{ duration: 0.4 }}>
			<BackgroundPoster
				key={results[slideNumber].backdrop_path}
				src={`https://image.tmdb.org/t/p/original${results[slideNumber].backdrop_path}`}
			/>
			<PosterImage
				key={results[slideNumber].poster_path}
				src={`https://image.tmdb.org/t/p/w500${results[slideNumber].poster_path}`}
			/>
			<Title key={results[slideNumber].title}>{results[slideNumber].title.slice(0, 20)}</Title>

			<Description key={results[slideNumber].overview}>{descriptionInDifrentSize}...</Description>
			<Navigation
				nextSlide={handleNextSLide}
				previewSlide={handlePreviewSlide}
				key={'Carusel Navigation'}
				movieid={results[slideNumber].id}
			/>

			<DotNavigation
				results={results}
				changeSlide={handleChangeSlide}
				slideIndex={slideNumber}
				key={'Dot Navigation'}
			/>
		</StyledCarusel>
	);
}

export default Carusel;
