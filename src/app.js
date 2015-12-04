// Global imports.
import 'babel-polyfill';
// Modules
import React                             from 'react';
import { Router, Route, IndexRoute }     from 'react-router'
import { render }                        from 'react-dom';


// App imports.
import 'index.html';
import Main                              from 'main/Main';
import Hello                             from 'hello/Hello';


//Needed for React Developer Tools
window.React = React;


render( (
    <Router>
        <Route path="/" component={ Main }>
            <IndexRoute component={ Hello }/>
        </Route>
    </Router>
), document.getElementById( 'app' ) );
