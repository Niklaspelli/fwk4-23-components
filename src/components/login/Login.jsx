import Form from './Form';
import Switch from './Switch';
import UniversalButton from '../subComponents/universalButton/UniversalButton';
import HeadLines from '../subComponents/headlines/HeadLines';

const Login = () => {
	return (
		<>
			<HeadLines title='Login Page' />
			<Form fields={['username', 'password']} />
			<UniversalButton title='Login' type='submit' />
			<Switch />
		</>
	);
};

export default Login;
