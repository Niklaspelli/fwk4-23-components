import Form from './Form'
import Logo from '../logo/Logo'
import Switch from './Switch'

const Login = () => {
  return (
    <>
      <Logo />
      <h1>Login</h1>
      <Form fields={["username", "password"]} />
      <h3>New user?</h3>
      <Switch />
    </>
  )
}

export default Login;