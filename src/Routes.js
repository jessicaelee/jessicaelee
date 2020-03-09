import React from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import Home from './Home';
import About from './About';
import Projects from './Projects';
import Contact from './Contact'

function Routes() {

    return (
        <BrowserRouter>
            <Switch >
                <Route exact path="/">
                    <Home />
                </Route>
                <Route exact path="/projects">
                    <Projects />
                </Route>
                <Route exact path="/contact">
                    <Contact />
                </Route>
                <Redirect to="/" />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;