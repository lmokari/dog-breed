import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './components/home';
import BreedsList from './components/breeds';
import BreedsImages from './components/breed';

const Routes = () => {
        return(
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/breedsList" exact component={BreedsList}/>
                <Route path="/breed/:breed" exact component={BreedsImages}/>
            </Switch>
        )
}

export default Routes;