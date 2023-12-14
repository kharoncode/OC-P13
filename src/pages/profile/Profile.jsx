import Account from '@components/account/Account';
import User from '@components/user/User';
import { useSelector } from 'react-redux';
import { getLogin, getProfile } from '../../router/selectors';
import { useLocation } from 'react-router-dom';

function Profile() {
   const location = useLocation();
   if (location.state?.re) {
      localStorage.setItem('profile', JSON.stringify(useSelector(getProfile)));
      localStorage.setItem('login', JSON.stringify(useSelector(getLogin)));
   } else {
      sessionStorage.setItem(
         'profile',
         JSON.stringify(useSelector(getProfile))
      );
      sessionStorage.setItem('login', JSON.stringify(useSelector(getLogin)));
   }
   const { loading, account } = useSelector(getProfile);
   return loading ? (
      <div>Loading ...</div>
   ) : (
      <main className="main bg-dark">
         <User />
         <h2 className="sr-only">Accounts</h2>
         {account.map((el, index) => (
            <Account data={el} key={`${index}`} />
         ))}
      </main>
   );
}

export default Profile;
