'use strict';

import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

import About from './About';
import Home from './Home';

export default class AppContainer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <div>
            <h2>React JS Sample</h2>
            <Router>
                <div>
                    <div className="row">
                        <div className="col-sm">
                            <Link to="/">Home</Link>
                        </div>
                        <div className="col-sm">
                            <Link to="/about">About</Link>
                        </div>
                    </div>
                    <Route exact path="/" render={props => {
                        return <Home/>
                    }}/>
                    <Route path="/about" render={props => {
                        return <About/>
                    }}/>
                </div>
            </Router>
        </div>;
    }
}
