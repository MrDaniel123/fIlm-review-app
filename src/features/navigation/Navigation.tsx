import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import Search from './Search';
import NavigationDesktop from './NavigationDesktop';
import Logo from './Logo';
import Mobilenavigation from './Mobilenavigation';
import ShowHideMenueButton from './ShowHideMenueButton';

import { breakPoint } from '../../styles/style';

const logoMenue = require('../../assets/logoMenue.png');

const StyledNavigation = styled.nav`
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

	useEffect(() => {
		const handleResizeWindow = () => setWindowWitch(window.innerWidth);
		window.addEventListener('resize', handleResizeWindow);
	}, []);

	const handleShowHideMenue = () => {
		setShowMobileMenue(prevValue => !prevValue);
	};
	return (
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

			{showMobileMenu && <Mobilenavigation showHideNavigation={handleShowHideMenue} />}

			{windowWidth > Number(breakPoint.large) ? <Search /> : <Search type={'small'} />}
		</StyledNavigation>
	);
}

export default Navigation;
