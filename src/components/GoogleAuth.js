import React, { Component } from 'react';

class GoogleAuth extends Component {
  state = { isSignedIn: null };

  componentDidMount() {
    window.gapi.load('client:auth2', () => {
      window.gapi.client.init({
        clientId: '358448226936-lpavvkuu6cpkop9shubdl4vlmgg15bju.apps.googleusercontent.com',
        scope: 'email'
      }).then(() => {
        this.auth = window.gapi.auth2.getAuthInstance();
        this.setState({ isSignedIn: this.auth.isSignedIn.get() })
        this.auth.isSignedIn.listen(this.onAuthChange)
      })
    });
  };

  onAuthChange = () => {
    this.setState({ isSignedIn: this.auth.isSignedIn.get() })
  };

  onSignInClick = () => {
    this.auth.signIn()
  };

  onSignOutClick = () => {
    this.auth.signOut()
  };

  renderAuthButton() {
    if(this.state.isSignedIn === null) {
      return null;
    } else if(this.state.isSignedIn) {
      return (
        <button onClick={this.onSignOutClick} className="ui green google button">
          <i className="google icon" />
          Sign Out
        </button>
      )
    } else {
      return (
        <button onClick={this.onSignInClick} className="ui red google button">
          <i className="google icon" />
          Sign In with Google
        </button>
      )
    }
  };

  render() {
    return (
      <div> {this.renderAuthButton()} </div>
    )
  }
}; // end of GoogleAuth()

export default GoogleAuth;



// ************ NOTES ************
//
// 'window' is a variable in gapi that is available on windows scope
//  inside of the browser. You need to have 'window' to avoid error message.
//  'window.gapi.load(client:auth2);' is going to load up that
//  client portion of the library.
//
//  when you call 'client.init' it executes an asynchronous operation or an network request
//  over to Google API server in order to initialize client.
//
//  '.then()' after running this code here you can reference 'this.auth' any other function inside
//  the class. 'this.auth' will give reference to the auth instance that can be used to sign the
//  user in or sign them out.
//
//componentDidMount() {
//   window.gapi.load('client:auth2', () => {
//     window.gapi.client.init({
//       clientId: '358448226936-lpavvkuu6cpkop9shubdl4vlmgg15bju.apps.googleusercontent.com',
//       scope: 'email'
//     }).then(() => {
//       this.auth = window.gapi.auth2.getAuthInstance();
//     })
//   });
// };
