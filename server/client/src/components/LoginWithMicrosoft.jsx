import React from "react";
import MicrosoftLogin from "react-microsoft-login";

const clientId = "20821fb6-4a64-4168-9dcc-1a2607395d98";


export default class LoginWithMicrosoft extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  authHandler = (err, data) => {
    console.log(err, data.authResponseWithAccessToken.idToken);
    //'redirect_uri' is not valid*********
  };
  render() {
    return (
      <MicrosoftLogin clientId={clientId} authCallback={this.authHandler} />
    );
  }
}
