import React from 'react';
import styled, { css } from 'styled-components';
import { breakPoint } from '../../styles/style';
import { result } from '../../types/nowPLayingType';

const dot = require('../../assets/dot.png');

const DotNavigationWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 1rem;
	width: 100%;

	@media (min-width: ${breakPoint.large}px) {
		gap: 2rem;
	}
`;

type styleProps = {
	type?: string;
};

const DotRadioButton = styled.button<styleProps>`
	all: unset;
	cursor: pointer;

	& img {
		transition: 0.3s;

		${props =>
			props.type === 'big' &&
			css`
				transform: scale(1.8);
			`}
		&:hover {
			transform: scale(1.8);
		}
	}
`;

type Props = {
	results: result[];
	changeSlide: (index: number) => void;
	slideIndex: number;
};

function DotNavigation({ results, changeSlide, slideIndex }: Props) {
	return (
		<DotNavigationWrapper>
			{results.map((result, index) => {
				if (index === slideIndex) {
					return (
						<DotRadioButton key={index} onClick={() => changeSlide(index)} type={'big'}>
							<img src={dot} alt={`Cange view wariant to ${index} `} />
						</DotRadioButton>
					);
				}
				return (
					<DotRadioButton key={index} onClick={() => changeSlide(index)}>
						<img src={dot} alt={`Cange view wariant to ${index} `} />
					</DotRadioButton>
				);
			})}
		</DotNavigationWrapper>
	);
}

export default DotNavigation;
