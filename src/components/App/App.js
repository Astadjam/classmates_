import React from 'react';
import './App.css';
import { AppRoute } from '../AppRoute/AppRoutes';

export class App extends React.Component {
    render(){
        return <React.Fragment>
            <AppRoute></AppRoute>
        </React.Fragment>
    }
}