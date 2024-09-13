import Form from '../login/Form';
import Switch from '../login/Switch';
import UniversalButton from '../universalButton/UniversalButton';
import HeadLines from '../headlines/HeadLines';

const Register = () => {
	return (
		<div>
			<HeadLines title = "Register Page" />
			<Form fields={['username', 'email', 'password', 'repeatPassword']} />
			<UniversalButton title='Register' type='submit' />
			<Switch />
		</div>
	);
};

export default Register;
