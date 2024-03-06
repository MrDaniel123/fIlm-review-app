import React from 'react';
import styled from 'styled-components';

import Logo from './Logo';
import StyledNavLink from './NavigationLink';
import { showMenue, showBackGround } from './animation';
import ShowHideMenueButton from './ShowHideMenueButton';

const logoMovie = require('../../assets/logoMovie.png');
const logoTvSeires = require('../../assets/logoTvSeries.png');
const logoPersons = require('../../assets/logoPersons.png');
const logoHome = require('../../assets/LogoHome.png');
const logoCloseMenue = require('../../assets/logoCloseMenue.png');

const BackGround = styled.div`
	position: fixed;
	left: 0;
	top: 0;
	width: 100%;
	height: 100%;
	background-color: var(--color-black-filter);
	z-index: 1;

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
	z-index: 2;

	animation: ${showMenue} 0.3s ease-in-out forwards;

	width: 34rem;
	height: 40rem;
	background-color: var(--color-white);

	border-radius: 0 0 14rem 0;

	& ul {
		& li {
			list-style: none;
		}
	}
`;

type Props = {
	showHideNavigation: () => void;
};

function Mobilenavigation({ showHideNavigation }: Props) {
	return (
		<>
			<BackGround onClick={showHideNavigation} />
			<Navigation>
				<ShowHideMenueButton
					onClickFn={showHideNavigation}
					imagePath={logoCloseMenue}
					alt='Close Menue Button'
					type='mobile'
				/>
				<Logo />
				<ul>
					<li>
						<StyledNavLink to={'/'} onClick={showHideNavigation}>
							<img src={logoHome} alt='Home Page' />
							<span>Home Page</span>
						</StyledNavLink>
					</li>
					<li>
						<StyledNavLink to={'/movies'} onClick={showHideNavigation}>
							<img src={logoMovie} alt='Logo movie' />
							<span>Movies</span>
						</StyledNavLink>
					</li>
					<li>
						<StyledNavLink to={'/tv-series'} onClick={showHideNavigation}>
							<img src={logoTvSeires} alt='Logo tv-series' />
							<span>Tv-Series</span>
						</StyledNavLink>
					</li>
					<li>
						<StyledNavLink to={'/persons'} onClick={showHideNavigation}>
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
