import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import PostList from './Posts/PostList';
class App extends Component {
    render() {
        return (
            <div>
                <Router>
                    <Route path='/' exact component={PostList}></Route>
                </Router>
            </div>
        );
    }
}

export default App; 