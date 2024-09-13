import FlexGridStructure from './FlexGridStructure';
import Cards from '../subComponents/cards/Cards';

export default {
	title: 'Components/FlexGridStructure',
	component: FlexGridStructure,
};

const Template = (args) => <FlexGridStructure {...args} />;

export const Default = Template.bind({});

Default.args = {
	config: {
		columns: 3,
		gap: '15px',
	},
	data: [{}, {}, {}],
	children: <Cards />,
};
