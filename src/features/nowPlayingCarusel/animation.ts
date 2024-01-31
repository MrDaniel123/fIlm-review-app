import { keyframes } from 'styled-components';

export const slowShowing = keyframes`
from{
	opacity: 0;
	transform: translateY(-15px);
}
to{
	opacity: 1;
	transform: translateY(0);
}
`;

export const slowShowingImage = keyframes`
from{
	opacity: 0;

}
to{
	opacity: 1;

}
`;

export const mountAnimation = keyframes`
from{
	transform: translateY(30px);
}
to{
	transform: translateY(0);
}
`;
