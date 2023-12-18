import { Link, useNavigate } from 'react-router-dom';
import userCircle from '@assets/circle-user-solid.svg';
import logOutLogo from '@assets/logout.svg';
import { useStore } from 'react-redux';
import { returnToken } from '@router/selectors';
import { loginSlice } from '@pages/login/loginSlice';
import { loginSessionSlice } from '@pages/login/loginSessionSlice';

function SignInOut() {
   const store = useStore();
   const navigate = useNavigate();
   const isAuthenticated = returnToken();

   const logOut = () => {
      store.dispatch(loginSlice.actions.resetLogin());
      store.dispatch(loginSessionSlice.actions.resetLogin());
      navigate('/login');
   };

   return isAuthenticated ? (
      <div className="main-nav-profile">
         <div className="main-nav-profile__item">
            <img
               className="main-nav-profile-item"
               src={userCircle}
               alt="userLogo"
            />
            <Link to={`/profile`}>Profile</Link>
         </div>
         <div className="main-nav-profile__item">
            <img
               className="main-nav-profile-item"
               src={logOutLogo}
               alt="logout"
            />
            <p className="main-nav-profile-item" onClick={logOut}>
               Sign out
            </p>
         </div>
      </div>
   ) : (
      <Link className="main-nav-item" to={`/login`}>
         <img src={userCircle} alt="userLogo" /> Sign In
      </Link>
   );
}

export default SignInOut;
