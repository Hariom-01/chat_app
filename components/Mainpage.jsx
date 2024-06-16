// Home.js

import { Link } from 'react-router-dom';
import { auth } from "../config/firebase"
import { useAuthState } from "react-firebase-hooks/auth"
import { signOut } from 'firebase/auth';
import '../App.css';
 export const Mainpage = () => {
  const [user] = useAuthState(auth);
  const signUserOut = async () => {
    await signOut(auth);
  }
  return (<div className='navbar'>

    <div className="navbar-links">
      <Link  className="navbar-links" to="/">home</Link>
      {!user ? (<Link className="navbar-links" to="/login">Login Here</Link>) : (
        <Link className="navbar-links" to="/createpost">Create Post</Link>
      )}
    </div>
    <div className='user'>
      {user && (
        <>


          <p > {auth.currentUser?.displayName}</p>
          <img src={auth.currentUser?.photoURL || ""} width="30" height="30" alt="" />
          <button onClick={signUserOut}>Log out</button>
        </>
      )}
    </div>
  </div>
  );
};

export default Mainpage;
