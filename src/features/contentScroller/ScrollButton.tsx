import styled, { css } from 'styled-components';

export const ScrollButton = styled.button<{ type?: string }>`
	all: unset;
	position: absolute;
	top: 80px;
	display: flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;
	height: 140px;
	width: 30px;
	border-radius: 0 25px 25px 0;

	& img {
		width: 120px;
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
