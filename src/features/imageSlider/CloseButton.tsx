import styled from 'styled-components';
import { breakPoint } from '../../styles/style';

const closeIcon = require('../../assets/closeIcon.png');

const CloseBtn = styled.button`
	border: none;
	position: absolute;
	top: 30px;
	right: 40px;
	background-color: transparent;
	height: 5rem;
	width: 5rem;
	transition: transform 0.3s;
	z-index: 2;

	&:hover {
		transform: scale(1.2);
	}

	& img {
		width: 100%;
	}

	@media (max-width: ${breakPoint.medium}px) {
		height: 4rem;
		width: 4rem;
	}

	@media (max-width: ${breakPoint.small}px) {
		right: 30px;
		height: 2.5rem;
		width: 2.5rem;
	}
`;

type CloseButtonProps = {
	onClickFn: () => void;
};

function CloseButton({ onClickFn }: CloseButtonProps) {
	return (
		<CloseBtn onClick={onClickFn}>
			<img src={closeIcon} alt='Close Gallery' />
		</CloseBtn>
	);
}

export default CloseButton;
