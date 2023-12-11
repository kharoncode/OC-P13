import userCircle from '@assets/circle-user-solid.svg';
import { Link } from 'react-router-dom';

function Login() {
   return (
      <main className="main bg-dark">
         <section className="sign-in-content">
            <img src={userCircle} alt="user" />
            <h1>Sign In</h1>
            <form>
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
