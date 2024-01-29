import React from 'react';
import styled from 'styled-components';
import { colors, fontSizes } from '../styles/style';

const searchLogo = require('../assets/logoSearch.png');

const SearchContainer = styled.div`
	display: flex;
	align-items: center;
	gap: 1rem;

	& img {
		cursor: pointer;
		border-radius: 0.8rem;
		padding: 1rem;
		&:hover {
			background-color: ${colors.whiteHover};
		}
	}
`;

const StyledInput = styled.input`
	width: 20rem;
	height: 3rem;
	border-radius: 0.8rem;
	font-size: ${fontSizes.regular};

	&::placeholder {
		font-size: ${fontSizes.regular};
		color: ${colors.fontGrey};
		padding: 0.7rem;
	}
`;

type Props = {
	type?: 'full' | 'small';
};

function Search({ type }: Props) {
	return (
		<SearchContainer>
			<img src={searchLogo} alt='Search logo' />
			{type !== 'small' && <StyledInput type='text' placeholder='Search...' />}
		</SearchContainer>
	);
}

export default Search;
