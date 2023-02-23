import { Field, Formik, Form } from 'formik';
import { Link } from 'react-router-dom';
import './login.css';

const Login = () => {
  const onSubmit = (v) => {
    console.log(v, 'these are the values');
  };
  return (
    <div className='login__container'>
      <div className='login__display'>
        <h1>Engaged</h1>
        <h2>Welcome to Engaged</h2>
        <h3>Create an account and join the community</h3>
      </div>
      <div className='login__wrapper'>
        <h3>Engaged</h3>
        <h3>Sign in</h3>

        <Formik
          initialValues={{
            email: '',
            username: '',
            password: '',
          }}
          onSubmit={onSubmit}
        >
          <Form>
            <Field type='email' placeholder='Email...' name='email' />
            {/* <Field type='password' placeholder='password' name='password' /> */}
            <button type='submit'>Next</button>
          </Form>
        </Formik>
        <div className='login__remember'>
          <input type='checkbox' />
          <a href=''>Stay signed in</a>
          <a href=''>Forgot username ?</a>
        </div>
        <button>Create an account</button>
        <Link to='/register'>Register here</Link>
      </div>
    </div>
  );
};

export default Login;
