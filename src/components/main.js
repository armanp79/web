import React from 'react';
import {Switch,Route} from 'react-router-dom'

import LandingPage from './landingpage'
import Contact from './contact'
import About from './aboutme'
import Projects from './projects'
import Resume from './resume'
import Three from './three'


const Main = () => (
    <Switch>
        <Route exact path ="/" component={LandingPage} />
        <Route path ="/aboutme" component={About} />
        <Route path ="/contact" component={Contact} />
        <Route path ="/projects" component={Projects} />
        <Route path ="/resume" component={Three} />
    </Switch>
)

export default Main;