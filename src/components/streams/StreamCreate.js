import React                  from 'react';
import { Field, reduxForm }   from 'redux-form';

class StreamCreate extends React.Component {
  renderInput({ input, label }) {
    return (
      <div className="field">
        <label>{label}</label>
        <input {...input} />
      </div>
    )
  }

  render() {
    return (
      <form className="ui form">
        <Field name="title" component={this.renderInput} label="Enter Title " />
        <Field name="description" component={this.renderInput} label="Enter Description"/>
      </form>
    )
  }
} // end of StreamCreate

export default reduxForm({
  form: 'streamCreate'
})(StreamCreate)



// ********** NOTES **********

// import React                from 'react';
// // 'Field' is capitalized because its a react component.
// // 'reduxForm' is a function, very similar to redux connect
// import { Field, reduxForm } from 'redux-form'

// class StreamCreate extends React.Component {
//   render() {
//     return (
//       <div>StreamCreate</div>
//     )
//   }
// }; // end of StreamCreate()

// // syntax here is that redux form is going to return function and immediately call
// // that function with streamCreate.
// //
// // redux-form is going to pass an object for some configuration.
// // It take single object and puts bunch of config into the object.
// // When you provide a name make sure it shows the purpose of the form.
// export default reduxForm({
//   form: 'streamCreate'
// })(StreamCreate);