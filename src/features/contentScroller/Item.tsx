import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-wrap: wrap;
	width: 130px;
	height: 200px;

	background-color: cadetblue;
`;

const ImagePoster = styled.div`
	height: 150px;
	width: 100px;
	border-radius: 12px;
	background-color: aliceblue;
`;

const Title = styled.h4`
	font-size: 14px;
	text-transform: uppercase;
	font-weight: bold;
`;

const Date = styled.h6`
	font-size: 8px;
	font-weight: lighter;
`;

function Item() {
	return (
		<Wrapper>
			<ImagePoster />
			<Title>Intellesteral</Title>
			<Date>25 mar 2012</Date>
		</Wrapper>
	);
}

export default Item;
