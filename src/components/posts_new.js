import React from "react";
import { Field, reduxForm } from "redux-form";


class PostsNew extends React.Component {
    // field obj contains event handlers 
    // field obj links the field component with the helper function
    renderField(field) {
        return (
            <div className="form-group">
                <label>{field.label}</label>
                <input 
                    className="form-control"
                    type="text"
                    // contains onChange onFocus etc.
                    {...field.input}
                />
            </div>
        )
    }



    render() {
        return (
            <form>
                <Field 
                    label="Title"
                    name="title"
                    component={this.renderField}
                />
                <Field 
                    label="Tags"
                    name="tags"
                    component={this.renderField}
                />
                <Field
                    label="Post Content"
                    name="content"
                    component={this.renderField} 
                />
            </form>
        );
    }
}

export default reduxForm({
    form: 'PostsNewForm'
})(PostsNew);