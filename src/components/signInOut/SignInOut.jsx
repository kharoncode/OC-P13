import { Link, useNavigate } from 'react-router-dom';
import userCircle from '@assets/circle-user-solid.svg';
import { useSelector, useStore } from 'react-redux';
import { getIsAuthenticated } from '../../router/selectors';
import { profileSlice } from '../../pages/profile/profileSlice';
import { loginSlice } from '../../pages/login/loginSlice';

function SignInOut() {
   const store = useStore();
   const navigate = useNavigate();
   const isAuthenticated = useSelector(getIsAuthenticated);

   const logOut = () => {
      store.dispatch(profileSlice.actions.resetProfile());
      store.dispatch(loginSlice.actions.resetLogin());
      localStorage.clear();
      sessionStorage.clear();
      navigate('/login');
   };

   return isAuthenticated ? (
      <div className="main-nav-profile">
         <div>
            <img
               className="main-nav-profile-item"
               src={userCircle}
               alt="userLogo"
            />{' '}
            <Link to={`/profile`}>Profile</Link>
         </div>
         <span>/</span>
         <p className="main-nav-profile-item" onClick={logOut}>
            LogOut
         </p>
      </div>
   ) : (
      <Link className="main-nav-item" to={`/login`}>
         <img src={userCircle} alt="userLogo" />
         Sign In
      </Link>
   );
}

export default SignInOut;
