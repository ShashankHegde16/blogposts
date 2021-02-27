import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { fetchPosts } from '../../actions';
import _ from 'lodash';

class PostList extends Component {


    componentDidMount() {
        this.props.fetchPosts();
    }

    renderPosts() {
        return _.map(this.props.posts, post => {
            return (
                <li key={post.id} className="list-group-item">{post.title}</li>
            )
        })

    }

    render() {
        if (!this.props.posts)
            return <div>No Posts!</div>
        return (
            <div >
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