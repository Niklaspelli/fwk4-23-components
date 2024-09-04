import Logo from '../logo/Logo';
import Form from '../login/Form';
import Switch from '../login/Switch';

const Register = () => {
	return (
		<div>
			<Logo /> <h1>Register</h1>
			<Form fields={['username', 'email', 'password', 'repeatPassword']} />
			<Switch />
		</div>
	);
};

export default Register;
