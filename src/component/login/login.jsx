import { Field, Formik } from 'formik';
import { Form } from 'react-router-dom';

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
          <Field type='password' placeholder='passord' name='password' />
          <button type='submit'>Submit</button>
        </Form>
      </Formik>
    </div>
  );
};

export default Login;
