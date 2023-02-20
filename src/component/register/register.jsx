import { Field, Form, Formik } from 'formik';
import './register.css';

const Register = () => {
  const onSubmit = (v) => {
    console.log(v, 'these are the values');
  };
  return (
    <div className='register__container'>
      <div className='register__wrapper'>
        <h3>Register</h3>
        <Formik
          initialValues={{
            email: '',
            username: '',
            password: '',
          }}
          onSubmit={onSubmit}
        >
          <Form>
            <Field type='text' placeholder='Enter your username' name='text' />
            <Field type='email' placeholder='Your Email...' name='email' />
            <Field
              type='password'
              placeholder='Enter the password'
              name='password'
            />
            <Field type='file' name='file' />
            <button type='submit'>Submit</button>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default Register;
