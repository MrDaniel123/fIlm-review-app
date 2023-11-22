import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import Search from './Search';
import Navigation from './Navigation';
import Logo from './Logo';
import Mobilenavigation from './Mobilenavigation';

import { breakPoint } from '../styles/breakpoints';
const logoMenue = require('../assets/logoMenue.png');

const StyledHeader = styled.nav`
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

function Header() {
	const [windowWidth, setWindowWitch] = useState(window.innerWidth);
	const [showMobileMenu, setShowMobileMenue] = useState(false);

	useEffect(() => {
		const handleResizeWindow = () => setWindowWitch(window.innerWidth);
		window.addEventListener('resize', handleResizeWindow);
	}, []);

	const handleShowOrHideNavigation = () => {
		setShowMobileMenue(!showMobileMenu);
	};
	return (
		<StyledHeader>
			{windowWidth < Number(breakPoint.large) && (
				<StyledMenue onClick={() => setShowMobileMenue(!showMobileMenu)}>
					<img src={logoMenue} alt='Menue' />
				</StyledMenue>
			)}
			<NavLink to={'/'}>
				<Logo />
			</NavLink>
			{windowWidth > Number(breakPoint.large) && <Navigation />}

			{showMobileMenu && <Mobilenavigation showNavigation={handleShowOrHideNavigation} />}

			{windowWidth > Number(breakPoint.medium) ? <Search /> : <Search type={'small'} />}
		</StyledHeader>
	);
}

export default Header;
