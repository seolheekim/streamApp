import React      from 'react';
import { Link }   from 'react-router-dom';

import GoogleAuth from './GoogleAuth';

const Header = () => {
  return  (
    <div className="ui secondary pointing menu">
      <Link to="/" className="item">
        StreamApp
      </Link>

      <div className="right menu">
        <Link to="/" className="item">
          All Stream
        </Link>
        <GoogleAuth />
      </div>

    </div>
  )
}; // end of Header()


export default Header;