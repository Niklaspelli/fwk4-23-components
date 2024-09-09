import Form from './Form';
import Logo from '../logo/Logo';
import Switch from './Switch';
import UniversalButton from '@universalButton/UniversalButton';

const Login = () => {
	return (
		<>
			<Logo />
			<h1>Login</h1>
			<Form fields={['username', 'password']} />
			<UniversalButton title='Login' type='submit' />
			<Switch />
		</>
	);
};

export default Login;
