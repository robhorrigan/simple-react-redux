import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

class Root extends React.Component {
    render() {
        return (
            <Router>
                { this.props.routes }
            </Router>
        )
    }
}

export default Root;