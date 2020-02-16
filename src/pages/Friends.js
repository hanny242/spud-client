import React, { Component } from 'react';
import{ API } from "../Api";

export class Friends extends Component {
    constructor(props) {
        super(props);
        this.state = {
            friends:[{}]
        };

        this.handleClick = this.handleClick.bind(this);
    }
    componentDidMount() {
        API.get("")
    }
    render() {
        return (
            <div>
                
            </div>
        );
    }
}

export default Friends;


