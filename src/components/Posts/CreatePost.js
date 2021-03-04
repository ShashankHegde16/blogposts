import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PostForm from './PostForm';
import { createPost } from '../../actions';

class CreatePost extends Component {

    handleSubmit(values) {
        this.props.createPost(values, () => {
            this.props.history.push('/')
        });
    }

    render() {
        return (
            <div>
                <PostForm onSubmit={this.handleSubmit.bind(this)} />
            </div>
        )
    }
}

const mapDispatchtoProps = (dispatch) => {
    return bindActionCreators({ createPost }, dispatch);
}

export default connect(null, mapDispatchtoProps)(CreatePost);