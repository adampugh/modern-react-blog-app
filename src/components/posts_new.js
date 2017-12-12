import React from "react";
import { Field, reduxForm } from "redux-form";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { createPost } from "../actions";


class PostsNew extends React.Component {
    // field obj contains event handlers 
    // field obj links the field component with the helper function
    renderField(field) {
        const { touched, error } = field.meta;
        const className = `form-group ${touched && error ? 'has-danger' : '' }`;


        return (
            <div className={className}>
                <label>{field.label}</label>
                <input 
                    className="form-control"
                    type="text"
                    // contains onChange onFocus etc.
                    {...field.input}
                />
                <div className="text-help">
                    {touched ? error : ''}
                </div>
            </div>
        )
    }

    onSubmit(values) {
        this.props.createPost(values, () => {
            this.props.history.push("/");
        });
    }

    render() {
        // made available via the reduxForm function
        const { handleSubmit } = this.props;


        return (
            // handleSubmit validates the form etc.
            // after that onSubmit is called and the values
            // are passed that we want to work with
            <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                <Field 
                    label="Title"
                    name="title"
                    component={this.renderField}
                />
                <Field 
                    label="Categories"
                    name="categories"
                    component={this.renderField}
                />
                <Field
                    label="Post Content"
                    name="content"
                    component={this.renderField} 
                />
                <button type="submit" className="btn btn-primary">Submit</button>
                <Link to="/" className="btn btn-danger">Cancel</Link>
            </form>
        );
    }
}

// values is an obj that contains users input
function validate(values) {
    const errors = {};

    //validate inputs from 'values' obj
    if (!values.title) {
        errors.title = "Enter a title";
    }

    if (!values.categories) {
        errors.categories = "Enter some categories";
    }

    if (!values.content) {
        errors.content = "Enter some content please";
    }
    // if errors is empty, form will be submitted
    return errors;
}

// whenever the user submits the form the validate 
// function will be called
// also adds properties to component
export default reduxForm({
    validate,
    form: 'PostsNewForm'
})(
    connect(null, { createPost })(PostsNew)
);