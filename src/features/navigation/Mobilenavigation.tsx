import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

import Logo from './Logo';
import StyledNavLink from './NavigationLink';
import ShowHideMenueButton from './ShowHideMenueButton';

const logoMovie = require('../../assets/logoMovie.png');
const logoTvSeires = require('../../assets/logoTvSeries.png');
const logoPersons = require('../../assets/logoPersons.png');
const logoHome = require('../../assets/LogoHome.png');
const logoCloseMenue = require('../../assets/logoCloseMenue.png');

const BackGround = styled(motion.div)`
	position: fixed;
	left: 0;
	top: 0;
	width: 100%;
	height: 100%;
	background-color: var(--color-black-filter);
	z-index: 1;
`;

const Navigation = styled(motion.div)`
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

const StyledMobileNavigation = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	z-index: 2;
	width: 100%;
	height: 100%;
`;

type Props = {
	showHideNavigation: () => void;
};

const variants = {
	in: {
		x: '-100%',
	},
	open: {
		x: 0,
	},
	out: {
		x: '-100%',
	},
};

function Mobilenavigation({ showHideNavigation }: Props) {
	return (
		<StyledMobileNavigation>
			<BackGround
				onClick={showHideNavigation}
				key={'navigation-background'}
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				exit={{ opacity: 0 }}
			/>
			<Navigation
				key={'navigation'}
				variants={variants}
				initial={'in'}
				animate={'open'}
				exit={'out'}
				transition={{ ease: 'easeInOut', duration: 0.2 }}>
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
						<StyledNavLink to={'/movies/popular'} onClick={showHideNavigation}>
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
		</StyledMobileNavigation>
	);
}

export default Mobilenavigation;
