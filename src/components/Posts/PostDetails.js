import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import { fetchPost, deletePost } from '../../actions';

class PostDetails extends Component {

    componentDidMount() {
        const { id } = this.props.match.params;
        if (!this.props.post) {
            this.props.fetchPost(id);
        }

    }
    onDelete() {
        const { id } = this.props.match.params;
        this.props.deletePost(id, () => {
            this.props.history.push('/');
        });
    }

    render() {
        const { post } = this.props;
        if (post) {
            return (
                <div>
                    <Link to="/">Back</Link>
                    <button className="btn btn-danger pull-xs-right"
                        onClick={this.onDelete.bind(this)}>Delete Post</button>
                    <h3>{post.title}</h3>
                    <h6>{post.categories}</h6>
                    <p> {post.content}</p>
                </div>
            )
        }
        return <div>Loading..</div>

    }
}
const mapStatetoProps = (state, ownProps) => {
    return {
        post: state.posts[ownProps.match.params.id]
    }
}
const mapDispatchtoProps = (dispatch) => {
    return bindActionCreators({ fetchPost, deletePost }, dispatch);

}
export default connect(mapStatetoProps, mapDispatchtoProps)(PostDetails);