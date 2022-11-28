import React from 'react';
import LoginForm from '../LoginForm/LoginForm';
import { useHistory } from 'react-router-dom';


function LoginPage() {
  const history = useHistory();

  return (
   
    <div id='login-page'>
      <h1 id='login-header'>let's dream!</h1>
      <div id='login-form'>
      <LoginForm />
      </div>
      <center>
        <button
          type="button"
          className="btn btn_asLink"
          onClick={() => {
            history.push('/registration');
          }}
        >
          Register
        </button>
      </center>
    </div>
   
  );
}

export default LoginPage;
