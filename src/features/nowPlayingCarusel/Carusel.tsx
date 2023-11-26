import React from 'react';
import styled from 'styled-components';

const arrow = require('../../assets/arrow.png');
const dot = require('../../assets/dot.png');

const CaruselWrapper = styled.div`
	display: grid;
	grid-template-columns: auto 1fr;
	grid-template-rows: 40px 1fr 50px 20px;
	justify-items: center;
	align-items: center;

	padding: 12px;
`;

const Image = styled.div`
	grid-column: 1/2;
	grid-row: 1/7;
	width: 120px;
	height: 200px;
	border-radius: 16px;

	background-color: #5e3030;
`;

const Title = styled.h3`
	font-size: 1.6rem;
	color: #fff;
	padding: 0.5rem 3rem;
	border-radius: 50px;
	background-color: #0000003a;
`;

const Description = styled.p`
	margin: 1rem;
	font-size: 10px;
	color: #fff;
	padding: 1rem;
	border-radius: 8px;
	background-color: #0000003a;
`;

const NavigationWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-around;
	width: 100%;
`;

const PreviewWiewBtn = styled.button`
	all: unset;
`;
const NextWiewBtn = styled.button`
	all: unset;
	transform: rotate(180deg);
`;

const MoreButton = styled.button`
	all: unset;
	padding: 1rem;
	background-color: #ffffffaf;
	color: #000;
	font-size: 14px;
	border-radius: 12px;
`;

const RadioDotButton = styled.button`
	all: unset;
`;

function Carusel() {
	return (
		<CaruselWrapper>
			{/* <img src='' alt='' /> */}
			<Image />
			<Title>Interstellar</Title>
			<Description>
				The story of Edgardo Mortara, a young Jewish boy living in Bologna, Italy, who in 1858,
				after being secretly baptized, was forcibly taken from his family to be raised as a
				Christian. His parents struggle to free their
			</Description>
			<NavigationWrapper>
				<PreviewWiewBtn>
					<img src={arrow} alt='' />
				</PreviewWiewBtn>
				<MoreButton>See More...</MoreButton>
				<NextWiewBtn>
					<img src={arrow} alt='' />
				</NextWiewBtn>
			</NavigationWrapper>

			<NavigationWrapper>
				<RadioDotButton>
					<img src={dot} alt='' />
				</RadioDotButton>
				<RadioDotButton>
					<img src={dot} alt='' />
				</RadioDotButton>
				<RadioDotButton>
					<img src={dot} alt='' />
				</RadioDotButton>
				<RadioDotButton>
					<img src={dot} alt='' />
				</RadioDotButton>
				<RadioDotButton>
					<img src={dot} alt='' />
				</RadioDotButton>
			</NavigationWrapper>
		</CaruselWrapper>
	);
}

export default Carusel;
