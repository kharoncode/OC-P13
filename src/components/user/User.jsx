import { useStore } from 'react-redux';
//import { userSlice } from './userSlice';
import { useEffect, useState } from 'react';
import { profileSlice } from '../../pages/profile/profileSlice';

function User() {
   const store = useStore();
   const [user, setUser] = useState(store.getState().profile);
   //const [user, setUser] = useState(store.getState().user);

   const handleSubmit = () => {
      const data = 'Peter Parker';
      const name = data.split(' ');
      store.dispatch(
         profileSlice.actions.updateFirstName({
            firstName: name[0],
            lastName: name[1],
         })
      );
      // store.dispatch(
      //    userSlice.actions.updateFirstName({
      //       firstName: name[0],
      //       lastName: name[1],
      //    })
      // );
   };

   useEffect(() => {
      store.subscribe(() => setUser(store.getState().profile));
      //store.subscribe(() => setUser(store.getState().user));
   });

   const profile = user?.profile?.body;
   console.log(user.profile);
   if (profile !== undefined) {
      return (
         <div className="header">
            <h1>
               Welcome back
               <br />
               {profile.firstName} {profile.lastName} !
            </h1>
            <button className="edit-button" onClick={() => handleSubmit()}>
               Edit Name
            </button>
         </div>
      );
   }
}

export default User;
