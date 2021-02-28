import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import '../../styles/style.css';


const renderField = function ({ input, label, meta: { touched, error } }) {
    const errorClass = `form-group ${touched && error ? ' has-danger' : ''}`;
    return (
        <div className={errorClass}>
            <label>{label}</label>
            <input
                className="form-control"
                type="text"
                {...input}
            />
            <div className="text-help">
                {touched && (error && <span>{error}</span>)}
            </div>
        </div>
    );
}

function validate(values) {
    const errors = {}
    if (!values.title) {
        errors.title = 'Enter a title!';
    }
    if (!values.category) {
        errors.category = 'Enter some categories';
    }
    if (!values.description) {
        errors.description = 'Enter some description!'
    }
    console.log(errors)
    return errors;
}


const PostForm = (props) => {
    const { handleSubmit, onSubmit } = props;

    return (<form onSubmit={handleSubmit((values) => onSubmit(values))}>
        <Field
            component={renderField}
            name='title'
            label="Post Title">
        </Field>
        <Field
            component={renderField}
            name='categories'
            label="Post Category">
        </Field>
        <Field
            component={renderField}
            name='content'
            label="Post Description">
        </Field>
        <button className="btn btn-primary">Create</button>
        <Link className="btn btn-danger" to='/'>Cancel</Link>
    </form>
    );

}


export default reduxForm({
    form: 'CreatePost',
    validate
})(PostForm);