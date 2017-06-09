import React from 'react';

import Header from '../../components/header';

import './style.css'

export default class Example extends React.Component {
    render() {
        return (
            <div className="app">
                <Header />
                <h1>Example</h1>
            </div>
        )
    }
}