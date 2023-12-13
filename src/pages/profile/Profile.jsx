import Account from '@components/account/Account';
import User from '@components/user/User';
import { useDispatch, useStore } from 'react-redux';
import { fetchProfile } from './profileSlice';
import { useNavigate } from 'react-router-dom';

function Profile() {
   const store = useStore();
   const dispatch = useDispatch();
   const navigate = useNavigate();
   const token = store.getState().login.token;
   console.log(token);
   if (token) {
      dispatch(fetchProfile(token));
   } else {
      navigate('/login');
   }

   const profile = store.getState().profile;
   const mockedData = {
      user: {
         email: 'steve@rogers.com',
         firstName: 'Steve',
         lastName: 'Rogers',
         createdAt: '2023-12-11T12:02:23.649Z',
         updatedAt: '2023-12-11T12:02:23.649Z',
         id: '6576fa4f39b8798f741fa323',
      },
      account: [
         {
            title: 'Argent Bank Checking (x8349)',
            amount: 2082.79,
            description: 'Available Balance',
         },
         {
            title: 'Argent Bank Savings (x6712)',
            amount: 10928.42,
            description: 'Available Balance',
         },
         {
            title: 'Argent Bank Credit Card (x8349)',
            amount: 184.3,
            description: 'Available Balance',
         },
      ],
   };

   return (
      <main className="main bg-dark">
         <User />
         <h2 className="sr-only">Accounts</h2>
         {mockedData.account.map((el, index) => (
            <Account data={el} key={`${mockedData.user.lastName}-${index}`} />
         ))}
      </main>
   );
}

export default Profile;
