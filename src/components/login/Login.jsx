import Form from './Form';
import Switch from './Switch';
import UniversalButton from '@universalButton/UniversalButton';
import HeadLines from '../headlines/HeadLines';

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
