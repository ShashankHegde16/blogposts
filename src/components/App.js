import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PostList from './Posts/PostList';
import CreatePost from './Posts/CreatePost';
import PostDetails from './Posts/PostDetails';
class App extends Component {
    render() {
        return (
            <div>
                <Router>
                    <div>
                        <Switch>
                            <Route path='/post/:id' exact component={PostDetails}></Route>
                            <Route path='/post/create' exact component={CreatePost}></Route>
                            <Route path='/' exact component={PostList}></Route>
                        </Switch>
                    </div>
                </Router>
            </div>
        );
    }
}

export default App; 