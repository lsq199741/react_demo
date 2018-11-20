import React from 'react'
import ReactDOM from 'react-dom'
import Home from './router/home/js/index'
import {BrowserRouter as Router, Route} from "react-router-dom";

ReactDOM.render(
    <Router>
        <Route path="/" component={Home}/>
    </Router>,
    document.getElementById('index')
);
