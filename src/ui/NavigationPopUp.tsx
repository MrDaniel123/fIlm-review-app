import React from 'react';
import styled from 'styled-components';
import Navigation from './Navigation';

const NavPopUp = styled.div`
	position: fixed;
	left: 0;
	top: 0;
	background-color: red;
`;

function NavigationPopUp() {
	return (
		<NavPopUp>
			<Navigation type={'mobile'} />
		</NavPopUp>
	);
}

export default NavigationPopUp;
