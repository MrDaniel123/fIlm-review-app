import { keyframes } from 'styled-components';

export const showMenue = keyframes`
  from{
    transform: translateX(-100%);
	
  }
  to{
    transform: translateX(0);
  }
`;

export const showBackGround = keyframes`
  from{
    background-color: transparent;;
  }
  to{
    background-color: var(--color-black-filter);
  }
`;
