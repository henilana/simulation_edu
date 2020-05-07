import React from "react";
import MicrosoftLogin from "react-microsoft-login";

const clientId = "c17868b5-04f7-48bd-8e2f-5109d5557f07";


export default class LoginWithMicrosoft extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  authHandler = (err, data) => {
    console.log(err, data);
    //'redirect_uri' is not valid*********
  };
  render() {
    return (
      <MicrosoftLogin clientId={clientId} authCallback={this.authHandler} />
    );
  }
}
