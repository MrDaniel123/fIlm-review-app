import React from 'react';

import styled from 'styled-components';
import Item from './Item';

const Wrapper = styled.section`
	display: flex;
	flex-wrap: wrap;

	width: 90%;
	max-width: 1280px;
	min-width: 340px;
	min-height: 200px;

	background-color: #ad5353;
`;

const Header = styled.h2`
	width: 100%;
	font-size: 32px;
	font-weight: bold;
	text-transform: uppercase;
`;

function ContentScroller() {
	return (
		<Wrapper>
			<Header>Trending</Header>
			<Item />
		</Wrapper>
	);
}

export default ContentScroller;
