'use strict';

import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

import About from './About';
import Home from './Home';
import AllCourse from './AllCourse';

export default class AppContainer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <div>
            <h2 className="text-center">Welcome to courseweb</h2>
            <Router>
                <div className="container-fuild">
                    <div className="row">
                        <div className="col-sm">
                            <Link to="/">Home</Link>
                        </div>
                        <div className="col-sm">
                            <Link to="/about">About</Link>
                        </div>
                        <div className="col-sm">
                            <Link to="/courses">Courses</Link>
                        </div>
                    </div>
                    <Route exact path="/" render={props => {
                        return <Home/>
                    }}/>
                    <Route path="/about" render={props => {
                        return <About/>
                    }}/>
                     <Route exact path="/courses" render={props => {
                        return <AllCourse/>
                    }}/>
                </div>
            </Router>
        </div>;
    }
}
