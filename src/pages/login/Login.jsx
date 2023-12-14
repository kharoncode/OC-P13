import userCircle from '@assets/circle-user-solid.svg';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchToken } from './loginSlice';
import { getLogin } from '../../router/selectors';
import { fetchProfile } from '../profile/profileSlice';

function Login() {
   const dispatch = useDispatch();
   const navigate = useNavigate();
   const { loading, error } = useSelector(getLogin);

   const handleSubmit = (e) => {
      e.preventDefault();
      const userName = e.currentTarget.username.value;
      const password = e.currentTarget.password.value;
      const remember = e.target.rememberMe.checked;
      dispatch(fetchToken({ email: userName, password: password })).then(
         (data) => {
            const token = data.payload.body.token;
            if (token) {
               if (remember) {
                  localStorage.setItem('token', token);
               } else {
                  sessionStorage.setItem('token', token);
               }
               dispatch(fetchProfile(token));
               navigate('/profile', { state: { re: remember } });
            }
         }
      );
   };

   const fastSubmitS = () => {
      const remember = document.getElementById('rememberMe').checked;
      dispatch(
         fetchToken({ email: 'steve@rogers.com', password: 'password456' })
      ).then((data) => {
         const token = data.payload.body.token;
         if (token) {
            dispatch(fetchProfile(token));
            navigate('/profile', { state: { re: remember } });
         }
      });
   };

   const fastSubmitT = () => {
      const remember = document.getElementById('rememberMe').checked;
      dispatch(
         fetchToken({ email: 'tony@stark.com', password: 'password123' })
      ).then((data) => {
         const token = data.payload.body.token;
         if (token) {
            dispatch(fetchProfile(token));
            navigate('/profile', { state: { re: remember } });
         }
      });
   };

   return (
      <main className="main bg-dark">
         <section className="sign-in-content">
            <img src={userCircle} alt="user" />
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
                  <input type="checkbox" id="rememberMe" />
                  <label htmlFor="rememberMe">Remember me</label>
               </div>
               <button className="sign-in-button">
                  {loading ? 'Loading ...' : 'Sign In'}
               </button>
               {error && <div>Acces denied !</div>}
            </form>
            <button className="sign-in-button" onClick={fastSubmitT}>
               FastConnect Tony
            </button>
            <button className="sign-in-button" onClick={fastSubmitS}>
               FastConnect Steve
            </button>
         </section>
      </main>
   );
}

export default Login;
