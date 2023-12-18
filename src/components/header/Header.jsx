import { Link } from 'react-router-dom';
import SignInOut from '@components/signInOut/SignInOut';
import logo from '@assets/argentBankLogo.png';

function Header() {
   return (
      <header className="main-nav">
         <Link className="main-nav-logo" to={`/`}>
            <img
               className="main-nav-logo-image"
               src={logo}
               alt="Argent Bank Logo"
            />
            <h1 className="sr-only">Argent Bank</h1>
         </Link>
         <SignInOut />
      </header>
   );
}

export default Header;
