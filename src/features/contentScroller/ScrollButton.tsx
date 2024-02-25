import styled, { css } from 'styled-components';

export const ScrollButton = styled.button<{ type?: string }>`
	all: unset;
	position: absolute;
	top: 8rem;
	display: flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;
	height: 14rem;
	width: 3rem;
	border-radius: 0 25px 25px 0;

	& img {
		width: 12rem;
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
