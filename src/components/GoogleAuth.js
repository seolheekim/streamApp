import React, { Component } from 'react';

class GoogleAuth extends Component {
  componentDidMount() {
    window.gapi.load('client:auth2', () => {
      window.gapi.client.init({
        clientId: '358448226936-lpavvkuu6cpkop9shubdl4vlmgg15bju.apps.googleusercontent.com',
        scope: 'email'
      });
    });
  };

  render() {
    return (
      <div> GoogleAuth </div>
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
//componentDidMount() {
//   window.gapi.load('client:auth2', () => {
//     window.gapi.clinet.init({
//       clinetId: '358448226936-lpavvkuu6cpkop9shubdl4vlmgg15bju.apps.googleusercontent.com',
//       scope: 'email'
//     });
//   });
// }