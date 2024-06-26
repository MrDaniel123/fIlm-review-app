import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import SearchButton from './SearchButton';
import NavigationDesktop from './NavigationDesktop';
import Logo from './Logo';
import Mobilenavigation from './Mobilenavigation';
import ShowHideMenueButton from './ShowHideMenueButton';
import Search from '../search/Search';

import { breakPoint } from '../../styles/style';

const logoMenue = require('../../assets/logoMenue.png');

const StyledNavigation = styled.nav`
	position: absolute;
	top: 0;
	left: auto;
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

function Navigation() {
	const [windowWidth, setWindowWitch] = useState(window.innerWidth);
	const [showMobileMenu, setShowMobileMenue] = useState(false);
	const [showSearch, setShowSearch] = useState(false);

	const handleShowHideSearch = () => {
		setShowSearch(prevState => !prevState);
	};

	useEffect(() => {
		const handleResizeWindow = () => setWindowWitch(window.innerWidth);
		window.addEventListener('resize', handleResizeWindow);
	}, []);

	const handleShowHideMenue = () => {
		setShowMobileMenue(prevValue => !prevValue);
	};
	return (
		<>
			<StyledNavigation>
				{windowWidth < Number(breakPoint.large) && (
					<ShowHideMenueButton
						onClickFn={handleShowHideMenue}
						imagePath={logoMenue}
						alt='Show Menue Button'
					/>
				)}
				<NavLink to={'/'}>
					<Logo />
				</NavLink>
				{windowWidth > Number(breakPoint.large) && <NavigationDesktop />}

				{windowWidth > Number(breakPoint.large) ? (
					<SearchButton showSearch={handleShowHideSearch} />
				) : (
					<SearchButton type={'small'} showSearch={handleShowHideSearch} />
				)}
			</StyledNavigation>
			<AnimatePresence>
				{showMobileMenu && <Mobilenavigation showHideNavigation={handleShowHideMenue} />}
			</AnimatePresence>
			{showSearch && <Search hideSearch={handleShowHideSearch} />}
		</>
	);
}

export default Navigation;
