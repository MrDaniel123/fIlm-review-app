import React from 'react';
import styled from 'styled-components';

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
			background-color: #e7e7e7;
		}
	}
`;

const StyledInput = styled.input`
	width: 20rem;
	height: 3rem;
	border-radius: 0.8rem;
	font-size: 1.6rem;

	&::placeholder {
		font-size: 1.6rem;
		color: #aaaaaa;
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
