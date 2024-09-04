import Logo from '../logo/Logo';
import Form from '../login/Form';
import Switch from '../login/Switch';
import UniversalButton from '@universalButton/UniversalButton';

const Register = () => {
	return (
		<div>
			<Logo /> <h1>Register</h1>
			<Form fields={['username', 'email', 'password', 'repeatPassword']} />
			<UniversalButton title='Register' type='submit' />
			<Switch />
		</div>
	);
};

export default Register;
