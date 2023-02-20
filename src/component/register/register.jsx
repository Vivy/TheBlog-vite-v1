import { Field, Form, Formik } from 'formik';

const Register = () => {
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
          <Field type='text' placeholder='Enter your username' name='text' />
          <Field type='email' placeholder='Email...' name='email' />
          <Field type='password' placeholder='passord' name='password' />
          <button type='submit'>Submit</button>
        </Form>
      </Formik>
    </div>
  );
};

export default Register;
