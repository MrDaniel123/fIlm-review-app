import React, { useRef } from 'react';

import styled from 'styled-components';
import Item from './Item';
import { NowPlaingMovie } from '../../types/nowPLayingMovieType';
import { ScrollButton } from './ScrollButton';
import { Header } from './Header';

const arrow = require('../../assets/arrowNext.png');

const Wrapper = styled.section`
	display: flex;
	flex-wrap: wrap;
	gap: 1.2rem;
	position: relative;

	width: 90%;
	max-width: 1280px;
	min-width: 340px;
	min-height: 200px;
`;

const ItemsWrapper = styled.div`
	display: flex;
	padding: 0 1.2rem;
	gap: 2rem;
	padding-left: 2rem;
	padding-right: 2rem;

	overflow: scroll;
	scroll-behavior: smooth;

	&::-webkit-scrollbar {
		width: 0;
	}

	border-radius: 16px;
`;

type Props = {
	data: NowPlaingMovie;
	name: string;
};

function Scroller({ data, name }: Props) {
	const elementRef = useRef<any>(null);
	//!!Any Type
	const handleHorizontallScroll = (step: number) => {
		elementRef.current.scrollLeft += step;
	};

	const renderCard = data.results.map(result => <Item key={result.id} data={result} />);

	return (
		<Wrapper>
			<Header>{name}</Header>

			<ScrollButton onClick={() => handleHorizontallScroll(-210)}>
				<img src={arrow} alt='Left Horizontal Scroll' />
			</ScrollButton>
			<ScrollButton type={'right'} onClick={() => handleHorizontallScroll(210)}>
				<img src={arrow} alt='Rigth Horizontal Scroll' />
			</ScrollButton>
			<ItemsWrapper ref={elementRef}>{renderCard}</ItemsWrapper>
		</Wrapper>
	);
}

export default Scroller;
