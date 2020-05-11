import React from 'react';
import MyButton from '../components/MyButton';
import Header from '../components/Header';
import SubHeader from '../components/SubHeader'
import { Container } from 'react-bootstrap'

function LoginSignUp() {
  return (
    <Container fluid="sm">
      <Header header='ברוכים הבאים'></Header>
      <SubHeader SubTitle='בבקשה התחברו או הרשמו כדי להמשיך להשתמש באפליקציה שלנו'></SubHeader>
      <br />
      <h1>Edusim</h1>
      <Container fluid="sm" className='mt-5 d-flex justify-content-center flex-column'>
        <MyButton classNames='mb-2 px-5 btn btn-block btn-lg' link='/Registration' ButtonName='הרשמה' />
        <MyButton classNames='px-5 btn btn-block btn-lg' link='/Login' ButtonName='התחברות' />
      </Container>
    </Container>
  );
}

export default LoginSignUp;