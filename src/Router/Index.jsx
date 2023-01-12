import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from '../Pages/Home.jsx';
import Networking from '../Pages/Tutorial/Linux/Networking/Index.jsx';
// import { Switch } from '@headlessui/react';

export default function Router(props) {
    return (
        <>
            <BrowserRouter>
                <Switch>
                    <Route exec path={'/'}>
                        <Home/>
                    </Route>
                    <Route path={'/tutorial/linux/networking'}>
                        <Networking/>
                    </Route>
                </Switch>
            </BrowserRouter>
        </>
    );
}
