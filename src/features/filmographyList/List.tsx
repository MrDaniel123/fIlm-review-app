import styled from 'styled-components';

export const List = styled.ol`
	display: flex;
	align-items: center;
	flex-wrap: wrap;
	gap: 12px;
	width: 90%;
	max-width: 800px;
	list-style-type: disc;
	padding: 2rem;
	border-radius: var(--border-radius-medium);
	box-shadow: var(--shadow-primary);
`;
