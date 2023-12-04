import React, { useEffect, useRef } from 'react';

import styled, { css } from 'styled-components';
import Item from './Item';
import { NowPLaing } from '../../types/nowPLayingType';

const arrow = require('../../assets/arrowNext.png');

const Wrapper = styled.section`
	display: flex;
	flex-wrap: wrap;
	gap: 12px;
	position: relative;

	width: 90%;
	max-width: 1280px;
	min-width: 340px;
	min-height: 200px;
`;

const ItemsWrapper = styled.div`
	display: flex;
	padding: 0 12px;
	gap: 20px;
	padding-left: 20px;
	padding-right: 20px;

	overflow: scroll;
	scroll-behavior: smooth;

	&::-webkit-scrollbar {
		width: 0;
	}

	border-radius: 16px;
`;

const Header = styled.h2`
	width: 100%;
	font-size: 30px;
	font-weight: bold;
`;

const ScrollButton = styled.button<{ type?: string }>`
	all: unset;
	position: absolute;
	top: 80px;
	cursor: pointer;
	height: 140px;
	border-radius: 0 25px 25px 0;

	& img {
		width: 30px;
	}
	${props =>
		props.type === 'right'
			? css`
					right: 0;
					border-radius: 25px 0 0 25px;
					& img {
						transform: rotate(180deg);
					}
			  `
			: css`
					left: 0;
			  `}
`;

type Props = {
	data: NowPLaing;
	name: string;
};

function ContentScroller({ data, name }: Props) {
	const elementRef = useRef<any>(null);

	// useEffect(() => {
	// 	elementRef.current.scrollLeft = +300;
	// }, []);

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

export default ContentScroller;
