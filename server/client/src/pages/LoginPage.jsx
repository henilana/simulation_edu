import React, {Component} from "react"
import LoginWithGoogle from "../components/LoginWithGoogle";
import LoginWithMicrosoft from "../components/LoginWithMicrosoft";

export default class LoginPage extends Component {
    render() {
        return (
            <div>
                <LoginWithGoogle/>
                <LoginWithMicrosoft/>
            </div>
        )
    }
}
