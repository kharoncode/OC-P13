import Account from '@components/account/Account';
import User from '@components/user/User';
import { useSelector, useDispatch } from 'react-redux';
import { getProfile, returnToken } from '@router/selectors';
import { fetchProfile } from './profileSlice';
import { useEffect } from 'react';

function Profile() {
   const dispatch = useDispatch();
   const token = returnToken();

   useEffect(() => {
      dispatch(fetchProfile(token));
   }, []);

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
