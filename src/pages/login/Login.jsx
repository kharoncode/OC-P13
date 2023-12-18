import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchToken } from './loginSlice';
import { fetchTokenSession } from './loginSessionSlice';
import userCircle from '@assets/circle-user-solid.svg';
import { getLogin, getLoginSession } from '@router/selectors';
import { returnError } from '@router/selectors';

function Login() {
   const dispatch = useDispatch();
   const navigate = useNavigate();
   const [remember, setRemember] = useState(false);
   const loading = remember
      ? useSelector(getLoginSession).loading
      : useSelector(getLogin).loading;
   const error = returnError();

   const handleSubmit = (e) => {
      e.preventDefault();
      const userName = e.currentTarget.username.value;
      const password = e.currentTarget.password.value;
      const remember = e.target.rememberMe.checked;
      if (remember) {
         dispatch(
            fetchTokenSession({ email: userName, password: password })
         ).then((data) => {
            const token = data.payload.body.token;
            if (token) {
               navigate('/profile');
            }
         });
      } else {
         dispatch(fetchToken({ email: userName, password: password })).then(
            (data) => {
               const token = data.payload.body.token;
               if (token) {
                  navigate('/profile');
               }
            }
         );
      }
   };

   return (
      <main className="main bg-dark">
         <section className="sign-in-content">
            <img className="sign-in-icon" src={userCircle} alt="user" />
            <h1>Sign In</h1>
            <form onSubmit={(e) => handleSubmit(e)}>
               <div className="input-wrapper">
                  <label htmlFor="username">Username</label>
                  <input type="text" id="username" />
               </div>
               <div className="input-wrapper">
                  <label htmlFor="password">Password</label>
                  <input type="password" id="password" />
               </div>
               <div className="input-remember">
                  <input
                     type="checkbox"
                     id="rememberMe"
                     onClick={(e) => {
                        setRemember(e.target.checked);
                     }}
                  />
                  <label htmlFor="rememberMe">Remember me</label>
               </div>
               <button className="sign-in-button">
                  {loading ? 'Loading ...' : 'Sign In'}
               </button>
               {error && (
                  <div className="sign-in-error">
                     Login Failed: Your user ID or password is incorrect
                  </div>
               )}
            </form>
         </section>
      </main>
   );
}

export default Login;
