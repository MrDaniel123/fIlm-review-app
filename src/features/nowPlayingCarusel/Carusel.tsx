import React, { useEffect, useState } from 'react';
import { NowPLaing } from '../../types/nowPLayingType';
import { breakPoint } from '../../styles/breakpoints';

import { CaruselWrapper } from './CaruselWrapper';
import { PosterImage } from './PosterImage';
import { Description } from './Description';
import { BackgroundPoster } from './BackgroundPoster';
import DotNavigation from './DotNavigation';
import { Title } from './Title';
import Navigation from './Navigation';

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
	} else if (windowWidth > Number(breakPoint.medium)) {
		descriptionInDifrentSize = results[slideNumber].overview.slice(0, 200);
	}

	return (
		<CaruselWrapper>
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
			<Navigation nextSlide={handleNextSLide} previewSlide={handlePreviewSlide} />

			<DotNavigation results={results} changeSlide={handleChangeSlide} />
		</CaruselWrapper>
	);
}

export default Carusel;
