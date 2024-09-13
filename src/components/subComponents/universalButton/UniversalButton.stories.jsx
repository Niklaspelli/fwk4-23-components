import UniversalButton from './UniversalButton';

export default {
	title: 'FWK/UniversalButton',
	component: UniversalButton,
};

export const Default = {
	args: {
		title: 'Default',
		type: 'submit',
	},
};

export const MissingTitle = {
	args: {
		type: 'submit',
	},
};

export const MissingType = {
	args: {
		title: 'Missing Type',
	},
};

export const MissingOnClick = {
	args: {
		title: 'Missing onClick',
		type: 'button',
	},
};

export const validButton = {
	args: {
		title: 'Valid Button',
		type: 'button',
		onClick: () => console.log('Valid Button Clicked'),
	},
};
