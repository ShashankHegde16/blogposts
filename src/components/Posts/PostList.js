import React, { Component } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import { fetchPosts } from '../../actions';

class PostList extends Component {


    componentDidMount() {
        this.props.fetchPosts();
    }

    renderPosts() {
        return _.map(this.props.posts, post => {
            return (
                <li
                    key={post.id}
                    className="list-group-item">
                    <Link to={`/post/${post.id}`}>{post.title}</Link>
                </li>
            )
        })

    }

    render() {
        if (!this.props.posts)
            return <div>No Posts!</div>
        return (
            <div >
                <div className="text-xs-right">
                    <Link to='/post/create' className="btn btn-primary">Add a Post</Link>
                </div>
                <h3>Posts</h3>
                <ul className="list-group">
                    {this.renderPosts()}
                </ul>
            </div>
        )
    }
}

const mapStatetoProps = (state) => {
    return {
        posts: state.posts
    }
}

const mapDispatchtoProps = (dispatch) => {
    return bindActionCreators({ fetchPosts }, dispatch);
}

export default connect(mapStatetoProps, mapDispatchtoProps)(PostList);