import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import Search from './Search';
import Navigation from './Navigation';
import Logo from './Logo';
import Mobilenavigation from './Mobilenavigation';

import { breakPoint } from '../styles/style';
const logoMenue = require('../assets/logoMenue.png');

const StyledHeader = styled.nav`
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 3.8rem;
	max-width: 1440px;
	min-width: 360px;
	width: 95%;
	padding: 4px 0;
	list-style: none;
	box-shadow: var(--shadow-primary);
	border-radius: var(--border-radius-bottom-large);
	background-color: var(--color-white);

	@media (max-width: ${breakPoint.extraLarge}px) {
		gap: 1.4rem;
	}
	@media (max-width: ${breakPoint.large}px) {
		justify-content: space-around;
	}
`;

const StyledMenue = styled.button`
	all: unset;

	width: 3.5rem;
	height: 3.5rem;
	cursor: pointer;

	border-radius: var(--border-radius-small);
	padding: 1rem;
	&:hover {
		background-color: var(--color-white-mercury);
	}

	& img {
		width: 3.5rem;
		height: 3.5rem;
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

			{windowWidth > Number(breakPoint.large) ? <Search /> : <Search type={'small'} />}
		</StyledHeader>
	);
}

export default Header;
