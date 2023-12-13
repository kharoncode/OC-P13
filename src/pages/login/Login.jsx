import userCircle from '@assets/circle-user-solid.svg';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector, useStore } from 'react-redux';
import { fetchToken } from './loginSlice';
import { getLogin } from '../../router/selectors';

function Login() {
   const dispatch = useDispatch();
   const navigate = useNavigate();
   const store = useStore();

   const { loading, error } = useSelector(getLogin);

   const handleSubmit = (e) => {
      e.preventDefault();
      const userName = e.currentTarget.username.value;
      const password = e.currentTarget.password.value;
      dispatch(fetchToken({ email: userName, password: password }));
   };

   const token = store.getState().login.token;

   if (token) {
      navigate('/profile');
   }

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
                  <input type="checkbox" id="remember-me" />
                  <label htmlFor="remember-me">Remember me</label>
               </div>
               <button className="sign-in-button">
                  {loading ? 'Loading ...' : 'Sign In'}
               </button>
               {error && <div>Acces denied !</div>}
            </form>
         </section>
      </main>
   );
}

export default Login;
