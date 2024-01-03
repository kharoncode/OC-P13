import { Link, useNavigate } from 'react-router-dom';
import userCircle from '@assets/circle-user-solid.svg';
import logOutLogo from '@assets/logout.svg';
import { useStore } from 'react-redux';
import { returnToken } from '@router/selectors';
import { loginSlice } from '@pages/login/loginSlice';
import { loginLocalSlice } from '@pages/login/loginLocalSlice';
import { persistor } from '../../router/store';
import { profileSlice } from '../../pages/profile/profileSlice';

function SignInOut() {
   const store = useStore();
   const navigate = useNavigate();
   const isAuthenticated = returnToken();

   const logOut = () => {
      store.dispatch(loginSlice.actions.resetLogin());
      store.dispatch(loginLocalSlice.actions.resetLogin());
      store.dispatch(profileSlice.actions.resetProfile());
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
