import React, { useContext, useRef } from 'react';
import { useNavigate } from 'react-router';
import { login,logout } from '../services/LoginService';
import AuthContext from '../store/contexts/AuthContext';

function LoginPage() {

  const formRef = useRef(); 
  const {signIn} = useContext(AuthContext);
  const navigate = useNavigate();

  const formSubmit = async (event) => {
    event.preventDefault();
   

    const body = new FormData(formRef.current);
    const param = {
      email:body.get('email'),
      password: body.get('password')
    }


     await signIn(param, (response) => {
        console.log('response', response);
        if(!response.isSucceded){
          alert(response.message)
        } else {
          navigate('/');
        }
     });

  }

  return <div>
  <form    method="post" onSubmit={formSubmit} ref={formRef}>
    <input name="email" type="email" placeholder="email" defaultValue={"eve.holt@reqres.in"} />
    <br />
    <input name="password" type="password" placeholder="password" defaultValue={"cityslicka"} />
    <br />
    <input type="submit" value="oturum aç"  />
  </form>

  </div>;
}

export default LoginPage;
