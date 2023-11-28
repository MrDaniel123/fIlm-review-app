import React from 'react';
import styled from 'styled-components';
import { breakPoint } from '../../styles/breakpoints';
import { result } from '../../types/nowPLayingType';

const dot = require('../../assets/dot.png');

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

const DotRadioButton = styled.button`
	all: unset;
	cursor: pointer;

	& img {
		transition: 0.3s;
		&:hover {
			transform: scale(1.6);
		}
	}
`;

type Props = {
	results: result[];
	changeSlide: (index: number) => void;
};

function DotNavigation({ results, changeSlide }: Props) {
	return (
		<DotNavigationWrapper>
			{results.map((result, index) => (
				<DotRadioButton onClick={() => changeSlide(index)}>
					<img src={dot} alt={`Cange view wariant to ${index} `} />
				</DotRadioButton>
			))}
		</DotNavigationWrapper>
	);
}

export default DotNavigation;
