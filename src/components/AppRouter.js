import React from 'react';
import { Switch, Route } from 'react-router-dom';
import CharacterList from './CharacterList';
import WelcomePage from './WelcomePage';

export default function AppRouter() {
    return (
        <div className='ui bottom attached segment active tab'>
            <Switch>
                <Route path='/' exact component={WelcomePage} />
                <Route path='/characters' component={CharacterList} /> 
            </Switch>
        </div>
    );
}