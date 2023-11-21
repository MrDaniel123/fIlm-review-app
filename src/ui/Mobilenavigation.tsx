import React from 'react';
import styled, { css, keyframes } from 'styled-components';
import { NavLink } from 'react-router-dom';

import { breakPoint } from '../styles/breakpoints';
import Logo from './Logo';

const logoMovie = require('../assets/logoMovie.png');
const logoTvSeires = require('../assets/logoPersons.png');
const logoPersons = require('../assets/logoPersons.png');
const logoHome = require('../assets/LogoHome.png');
const appLogo = require('../assets/logo.png');
const logoCloseMenue = require('../assets/logoCloseMenue.png');

const showMenue = keyframes`
  from{
    transform: translateX(-100%);
	
  }
  to{
    transform: translateX(0);
  }
`;

const showBackGround = keyframes`
  from{
    background-color: #fff;;
  }
  to{
    background-color: #00000082;
  }
`;

const BackGround = styled.div`
	position: absolute;
	left: 0;
	top: 0;
	width: 100%;
	height: 100vh;
	background-color: #00000082;

	animation: ${showBackGround} 0.3s ease-in-out forwards;
`;

const StyledNavLink = styled(NavLink)`
	display: flex;
	align-items: center;
	padding: 0.8rem 2.4rem;
	margin: 0.4rem 1rem;
	text-decoration: none;
	border-radius: 1.6rem;
	margin: 1rem;
	transition: 0.1s;

	@media (max-width: ${breakPoint.extraLarge}px) {
		padding: 0.8rem 1rem;
	}

	& span {
		font-size: 2.4rem;
		font-weight: 600;
		color: #4b5563;

		@media (max-width: ${breakPoint.extraLarge}px) {
			font-size: 2rem;
		}
	}

	&:hover,
	&:active,
	&.active:link,
	&.active:visited {
		background-color: #e7e7e7;
	}
`;

const Navigation = styled.nav`
	position: absolute;
	top: 0;
	left: 0;
	display: flex;
	flex-wrap: wrap;
	flex-direction: column;
	align-items: flex-start;
	gap: 2rem;
	padding: 1rem;

	animation: ${showMenue} 0.3s ease-in-out forwards;

	width: 340px;
	height: 40rem;
	background-color: #fff;

	border-radius: 0 0 14rem 0;

	& ul {
		& li {
			list-style: none;
		}
	}
`;

const CloseButton = styled.button`
	all: unset;
	position: absolute;
	top: 1rem;
	right: 1rem;
	width: 3.5rem;
	height: 3.5rem;
	cursor: pointer;
	border-radius: 0.8rem;
	padding: 1rem;

	&:hover {
		background-color: #e7e7e7;
	}
`;

type Props = {
	showNavigation: any;
};

function Mobilenavigation({ showNavigation }: Props) {
	return (
		<>
			<BackGround />
			<Navigation>
				<CloseButton onClick={showNavigation}>
					<img src={logoCloseMenue} alt='Close Menue' />
				</CloseButton>
				<Logo />
				<ul>
					<li>
						<StyledNavLink to={'/'}>
							<img src={logoHome} alt='Home Page' />
							<span>Home Page</span>
						</StyledNavLink>
					</li>
					<li>
						<StyledNavLink to={'/movies'}>
							<img src={logoMovie} alt='Logo movie' />
							<span>Movies</span>
						</StyledNavLink>
					</li>
					<li>
						<StyledNavLink to={'/tv-series'}>
							<img src={logoTvSeires} alt='Logo tv-series' />
							<span>Tv-Series</span>
						</StyledNavLink>
					</li>
					<li>
						<StyledNavLink to={'/persons'}>
							<img src={logoPersons} alt='Logo persons' />
							<span>Persons</span>
						</StyledNavLink>
					</li>
				</ul>
			</Navigation>
		</>
	);
}

export default Mobilenavigation;

const mobileStyle = css`
	position: absolute;
	top: 0;
	left: 0;
	flex-wrap: wrap;
	z-index: 1;

	max-width: 70%;
	min-width: 360px;
	width: 70%;
	height: 40rem;
	background-color: #494949;

	border-radius: 0 0 14rem 0;
	& ul {
		flex-wrap: wrap;
		flex-direction: column;
		justify-content: space-evenly;
		align-items: flex-start;
		margin-left: 4rem;
		width: 100%;
		height: 100%;
		background-color: #6b2929;
	}

	/* &:before {
		display: block;
		content: '';
		position: absolute;
		left: 0;
		right: 0;
		height: 100vh;
		width: 100%;
		background-color: #000000aa;
		z-index: -1;
	} */
`;

const Menuebackground = styled.div`
	position: absolute;
	left: 0;
	right: 0;
	width: 100vw;
	height: 100vh;
	z-index: 0;

	background-color: #00000048;
`;
