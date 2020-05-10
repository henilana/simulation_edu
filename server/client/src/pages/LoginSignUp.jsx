import React from 'react';
import MyButton from '../components/Button';
import Header from '../components/Header';
import SubHeader from '../components/SubHeader'

function LoginSignUp() {
  return (
   <div>
          <Header header='ברוכים הבאים'></Header>
          <SubHeader SubTitle='בבקשה התחברו או הרשמו כדי להמשיך להשתמש באפליקציה שלנו'></SubHeader>
          <br/>
                <h1>Edusim</h1>
          <MyButton link='/Registration' ButtonName='הרשמה'></MyButton>
          <br/>
          <MyButton link='/Login' ButtonName='התחברות'></MyButton>
   </div>
  );
}

export default LoginSignUp;