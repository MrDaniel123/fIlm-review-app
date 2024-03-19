import styled from 'styled-components';

export const ListElement = styled.li`
	font-size: 16px;
	font-family: bold;
	width: 100%;

	border: 1px solid #000000;
	border-radius: var(--border-radius-small);
	padding: 1rem;
	cursor: pointer;

	&:hover {
		color: #5050c7;
		background-color: #bababa;
	}
`;
