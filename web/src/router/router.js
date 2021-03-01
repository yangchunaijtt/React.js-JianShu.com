import React, { lazy, Suspense } from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import Home from '../pages/home';
import Detail from '../pages/detail';
import "./index.css";

const MyRoute = (props) => {
    return (
        <div className='content'>
            <HashRouter>
                <Suspense fallback={<div>Loading...</div>} maxDuration={1000}>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/home" component={Home} />
                        <Route exact path="/detail" component={Detail} />
                    </Switch>
                </Suspense>
            </HashRouter>
        </div>
    )
}

export default MyRoute;