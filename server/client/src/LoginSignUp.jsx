import React from 'react';
import Button from './Button';
import Header from './Header';
import SubHeader from './SubHeader'

function LoginSignUp() {
  return (
   <div>
          <Header header='ברוכים הבאים'></Header>
          <SubHeader SubTitle='בבקשה התחברו או הרשמו כדי להמשיך להשתמש באפליקציה שלנו'></SubHeader>
          <Button link='/LoginSignUp' ButtonName='הרשמה'></Button>
          <Button link='/LoginSignUp' ButtonName='התחברות'></Button>
   </div>
  );
}

export default LoginSignUp;