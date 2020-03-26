
import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Logon from './pages/Logon';
import Register from './pages/Register';
import Profile from './pages/Profile';
import NovoIncident from './pages/NovoIncident';


export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Logon}/>
                <Route path="/registro" component={Register}/>
                <Route path="/profile" component={Profile}/>
                <Route path="/incident/new" component={NovoIncident}/>
            </Switch>
        </BrowserRouter>
    )
}