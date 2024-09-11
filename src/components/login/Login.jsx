import Form from './Form';
import Logo from '../logo/Logo';
import Switch from './Switch';
import UniversalButton from '@universalButton/UniversalButton';
import HeadLines from '../headlines/HeadLines';

const Login = () => {
	return (
		<>
			<Logo />
			<HeadLines title='Login Page' />
			<Form fields={['username', 'password']} />
			<UniversalButton title='Login' type='submit' />
			<Switch />
		</>
	);
};

export default Login;
