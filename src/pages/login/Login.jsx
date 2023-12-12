import userCircle from '@assets/circle-user-solid.svg';
import { Link } from 'react-router-dom';
import CallApi from '../../utils/CallApi';
import GetProfile from '../../utils/GetProfile';
import { useDispatch, useStore } from 'react-redux';
import { fetchToken } from './loginSlice';

function Login() {
   const store = useStore();
   const user = {
      tony: {
         email: 'tony@stark.com',
         password: 'password123',
      },
      steve: {
         email: 'steve@rogers.com',
         password: 'password456',
      },
   };
   const dispatch = useDispatch();
   // const result = CallApi(user.steve);
   // if (result?.body) {
   //    console.log(result);
   // }
   // console.log(GetProfile(result?.body));

   const handleSubmit = (e) => {
      e.preventDefault();
      const userName = e.currentTarget.username.value;
      const password = e.currentTarget.password.value;
      const token =
         'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1NzZmYTRmMzliODc5OGY3NDFmYTMyMyIsImlhdCI6MTcwMjM4OTc5MSwiZXhwIjoxNzAyNDc2MTkxfQ.A_cv1JkDQ8KMxhPIuUMwv03CgbL6WISbDQBN0P4cbbw';
      dispatch(fetchToken({ email: userName, password: password }));
      console.log(store.getState().login.token);
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
                  <input type="checkbox" id="remember-me" />
                  <label htmlFor="remember-me">Remember me</label>
               </div>
               <button className="sign-in-button">Sign In</button>
               <Link to={'/profile'}>Test</Link>
            </form>
         </section>
      </main>
   );
}

export default Login;
