import { Field, Formik, Form } from 'formik';
import { Link } from 'react-router-dom';

const Login = () => {
  const onSubmit = (v) => {
    console.log(v, 'these are the values');
  };
  return (
    <div>
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
          <Field type='password' placeholder='password' name='password' />
          <button type='submit'>Submit</button>
        </Form>
      </Formik>
      <Link to='/register'>Register here</Link>
    </div>
  );
};

export default Login;
