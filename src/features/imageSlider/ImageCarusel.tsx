import styled, { css, keyframes } from 'styled-components';
import { breakPoint } from '../../styles/style';

const arrowIcon = require('../../assets/arrowNextV2.png');

const StyledImageCarusel = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 95%;
	gap: 4px;
`;

const Image = styled.img`
	width: 70%;
`;

const ChangeImageButton = styled.button<{ $type?: string }>`
	border: none;
	background-color: transparent;

	width: 8rem;
	height: 8rem;
	cursor: pointer;
	transition: transform 0.3s;

	&:hover {
		transform: scale(1.2);
	}

	& img {
		width: 100%;
		height: 100%;
	}

	${props =>
		props.$type === 'next-image' &&
		css`
			& img {
				transform: rotate(180deg);
			}
		`}

	@media(max-width: ${breakPoint.medium}px) {
		width: 5rem;
		height: 5rem;
	}

	@media (max-width: ${breakPoint.small}px) {
		width: 3rem;
		height: 3rem;
	}
`;

type ImageCaruselProps = {
	onCLickFn: (type: string) => void;
	imagePath: string;
};

function ImageCarusel({ imagePath, onCLickFn }: ImageCaruselProps) {
	return (
		<StyledImageCarusel>
			<ChangeImageButton onClick={() => onCLickFn('decrease')}>
				<img src={arrowIcon} alt='Prev Slide' />
			</ChangeImageButton>
			<Image src={imagePath} />
			<ChangeImageButton $type={'next-image'} onClick={() => onCLickFn('increase')}>
				<img src={arrowIcon} alt='Next Slide' />
			</ChangeImageButton>
		</StyledImageCarusel>
	);
}

export default ImageCarusel;
