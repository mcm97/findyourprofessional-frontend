"use strict";

import React from 'react';
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom';



export default class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            title: 'Findyourprofessional',
            routes: [
            ]
        };
    }

    componentDidMount(){
        document.title = this.state.title;
    }

    render() {
        return(
            <div>
                <h1>Hello World!</h1>
            </div>
        );
    }
}

