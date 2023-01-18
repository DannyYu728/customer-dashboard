import * as React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css'

export interface IAppProps {
}

const Nav = () => {
  return (
    <nav>
      <Link to="/"><div className='links'>Dashboard</div></Link>
      <Link to="/create"><div className='links'>Create</div></Link>
      {/* <Link to="/signIn"><div className='links'>Login</div></Link>
      <Link to="/signUp"><div className='links'>Sign Up</div></Link> */}
    </nav>
  );
}

export default Nav
