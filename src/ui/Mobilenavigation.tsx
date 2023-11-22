import React from 'react';
import styled, { keyframes } from 'styled-components';

import Logo from './Logo';
import StyledNavLink from './NavigationLink';

const logoMovie = require('../assets/logoMovie.png');
const logoTvSeires = require('../assets/logoPersons.png');
const logoPersons = require('../assets/logoPersons.png');
const logoHome = require('../assets/LogoHome.png');
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
	showNavigation: () => void;
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
