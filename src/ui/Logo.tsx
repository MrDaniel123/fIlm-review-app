import React from 'react';
import styled from 'styled-components';

const StyledLogo = styled.img`
	width: 20rem;
	height: 5.2rem;
	cursor: pointer;
`;

const appLogo = require('../assets/logo.png');
function Logo() {
	return <StyledLogo src={appLogo} alt='Aplication Logo' />;
}

export default Logo;
