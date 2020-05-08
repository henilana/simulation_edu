import React from 'react';
import Button from './Button';
import Header from './Header';
import SubHeader from './SubHeader'

function LoginSignUp() {
  return (
   <div>
          <Header header='ברוכים הבאים'></Header>
          <SubHeader SubTitle='בבקשה התחברו או הרשמו כדי להמשיך להשתמש באפליקציה שלנו'></SubHeader>
          <br/>
                <h1>Edusim</h1>
          <Button link='/LoginSignUp' ButtonName='הרשמה'></Button>
          <br/>
          <Button link='/LoginSignUp' ButtonName='התחברות'></Button>
   </div>
  );
}

export default LoginSignUp;