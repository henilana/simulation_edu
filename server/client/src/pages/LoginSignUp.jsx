import React from 'react';
import Button from '../components/Button';
import Header from '../components/Header';
import SubHeader from '../components/SubHeader'

function LoginSignUp() {
  return (
   <div>
          <Header header='ברוכים הבאים'></Header>
          <SubHeader SubTitle='בבקשה התחברו או הרשמו כדי להמשיך להשתמש באפליקציה שלנו'></SubHeader>
          <br/>
                <h1>Edusim</h1>
          <Button link='/Registration' ButtonName='הרשמה'></Button>
          <br/>
          <Button link='/Login' ButtonName='התחברות'></Button>
   </div>
  );
}

export default LoginSignUp;