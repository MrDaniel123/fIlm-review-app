import React from 'react';
import styled, { css } from 'styled-components';

type ShowHideMenueButtonProps = {
	imagePath: string;
	alt: string;
	type?: 'mobile';
	onClickFn: () => void;
};

const StyledButton = styled.button<{ $type?: string }>`
	all: unset;

	width: 3.5rem;
	height: 3.5rem;
	border-radius: 0.8rem;
	padding: 1rem;
	cursor: pointer;

	${props =>
		props.$type === 'mobile' &&
		css`
			position: absolute;
			top: 1rem;
			right: 1rem;
		`}

	&:hover {
		background-color: var(--color-white-mercury);
	}
`;

function ShowHideMenueButton({ imagePath, alt, onClickFn, type }: ShowHideMenueButtonProps) {
	return (
		<StyledButton onClick={onClickFn} $type={type}>
			<img src={imagePath} alt={alt} />
		</StyledButton>
	);
}

export default ShowHideMenueButton;
