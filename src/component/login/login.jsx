import React from 'react';

const Login = () => {
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
