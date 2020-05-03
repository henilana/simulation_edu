import React from "react";
import {GoogleLogin} from "react-google-login-component";

export default class Google_Login extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  responseGoogle(googleUser) {
    let id_token = googleUser.getAuthResponse().id_token;
    let googleId = googleUser.getId();

    console.log({googleId});
    console.log({accessToken: id_token});
    //anything else you want to do(save to localStorage)...
  }

  render() {
    const socialId = "484579547170-8lquvdreveesdmrvt3dmo2hfg9nib8g2.apps.googleusercontent.com";
    return (
      <div>
        <GoogleLogin
          socialId={socialId}
          className="google-login"
          scope="profile"
          fetchBasicProfile={false}
          responseHandler={this.responseGoogle}
          buttonText="Login With Google"
        />
      </div>
    );
  }
}
