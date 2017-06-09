import React from 'react';

import Header from '../../components/header';
import Counter from './components/counter';

import './style.css'

export default class App extends React.Component {
    render() {
        return (
            <div className="app">
                <Header />
                <Counter />
            </div>
        )
    }
}