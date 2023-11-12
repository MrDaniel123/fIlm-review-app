import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import Search from './Search';
import { breakPoint } from '../styles/breakpoints';

const logoMovie = require('../assets/logoMovie.png');
const logoTvSeires = require('../assets/logoPersons.png');
const logoPersons = require('../assets/logoPersons.png');
const logoMenue = require('../assets/logoMenue.png');

const NavigationStyled = styled.nav`
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 3.8rem;
	max-width: 1440px;
	min-width: 360px;
	width: 95%;
	padding: 0.4rem 0;
	list-style: none;
	box-shadow: 0px 0px 19px -4px #000000;
	border-radius: 0px 0px 32px 32px;

	@media (max-width: ${breakPoint.extraLarge}px) {
		gap: 1.4rem;
	}
	@media (max-width: ${breakPoint.large}px) {
		justify-content: space-around;
	}
`;

const NavList = styled.ul`
	display: flex;
	list-style: none;
`;

const StyledNavLink = styled(NavLink)`
	display: flex;
	align-items: center;
	gap: 2.8rem;
	padding: 0.8rem 2.4rem;
	margin: 0.4rem 1rem;
	text-decoration: none;
	border-radius: 1.6rem;

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

const StyledMenue = styled.button`
	all: unset;
	width: 35px;
	height: 35px;
	cursor: pointer;

	border-radius: 0.8rem;
	padding: 1rem;
	&:hover {
		background-color: #e7e7e7;
	}
`;

//!! this is test logo
const Logo = styled.div`
	width: 170px;
	height: 35px;
	background-color: #3c2f6b;
`;

function Navigation() {
	const [windowWidth, setWindowWitch] = useState(window.innerWidth);

	useEffect(() => {
		const handleResizeWindow = () => setWindowWitch(window.innerWidth);
		window.addEventListener('resize', handleResizeWindow);
	}, []);

	return (
		<NavigationStyled>
			{windowWidth <= Number(breakPoint.large) && (
				<StyledMenue>
					<img src={logoMenue} alt='Menue' />
				</StyledMenue>
			)}
			<Logo />

			{windowWidth >= Number(breakPoint.large) && (
				<NavList>
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
				</NavList>
			)}
			{windowWidth >= Number(breakPoint.medium) ? <Search /> : <Search type={'small'} />}
		</NavigationStyled>
	);
}

export default Navigation;
