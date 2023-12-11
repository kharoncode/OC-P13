import { Link } from 'react-router-dom';
import userCircle from '@assets/circle-user-solid.svg';

function SignInOut() {
   return (
      <Link className="main-nav-item" to={`/sign-in`}>
         <img src={userCircle} alt="SignIn" />
         Sign In
      </Link>
   );
}

export default SignInOut;
