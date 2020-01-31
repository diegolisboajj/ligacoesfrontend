import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './pages/home';
import CalculoVertx from './pages/calculo';

const Routes = () => (
    <BrowserRouter>
        <Route path="/" component={Home} />
        <Route path="/" component={CalculoVertx} />
    </BrowserRouter>
);

export default Routes;