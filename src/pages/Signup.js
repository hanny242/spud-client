import React, { Component } from 'react';
import axios from "Axios";

export class Signup extends Component {

    handleSignupClick(){
        axios({
            url: process.env.REACT_APP_API/Signup
        })
    }
    render() {
        return (
            <div>
                
            </div>
        );
    }
}

export default Signup;
