import styled, { css, keyframes } from 'styled-components';
import { breakPoint } from '../../styles/style';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

const arrowIcon = require('../../assets/arrowNextV2.png');

const StyledImageCarusel = styled.div`
	position: relative;
	width: 95%;
	height: 70%;

	overflow: hidden;
`;

const Image = styled(motion.img)`
	position: absolute;
	top: 0;
	left: 0;

	width: 100%;
`;

const ChangeImageButton = styled.button<{ $type?: string }>`
	border: none;
	background-color: transparent;
	position: absolute;
	top: 45%;
	left: 0;

	width: 8rem;
	height: 8rem;
	cursor: pointer;
	transition: transform 0.3s;
	z-index: 2;

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
			left: auto;
			right: 0;
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

const variants = {
	enter: (direction: 'next' | 'prev') => {
		return {
			opacity: 0,
			zIndex: 0,
			x: direction === 'next' ? 1000 : -1000,
		};
	},
	center: {
		opacity: 1,
		zIndex: 1,
		x: 0,
	},
	exit: (direction: 'next' | 'prev') => {
		return {
			opacity: 0,
			zIndex: 0,
			x: direction === 'next' ? 1000 : -1000,
		};
	},
};

function ImageCarusel({ imagePath, onCLickFn }: ImageCaruselProps) {
	const [direction, setDirection] = useState<'next' | 'prev'>('next');

	return (
		<StyledImageCarusel>
			<AnimatePresence initial={false} custom={direction}>
				<ChangeImageButton
					onClick={() => {
						onCLickFn('decrease');
						setDirection('prev');
					}}
					key={'prev-button'}>
					<img src={arrowIcon} alt='Prev Slide' />
				</ChangeImageButton>

				<Image
					src={imagePath}
					key={imagePath}
					variants={variants}
					initial='enter'
					animate='center'
					exit='exit'
					custom={direction}
					transition={{
						x: { type: 'spring', stiffness: 300, damping: 30 },
						opacity: { duration: 0.2 },
					}}
				/>

				<ChangeImageButton
					$type={'next-image'}
					onClick={() => {
						onCLickFn('increase');
						setDirection('next');
					}}
					key={'next-button'}>
					<img src={arrowIcon} alt='Next Slide' key={arrowIcon} />
				</ChangeImageButton>
			</AnimatePresence>
		</StyledImageCarusel>
	);
}

export default ImageCarusel;
