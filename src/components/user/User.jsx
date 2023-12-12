import { useStore } from 'react-redux';
import { userSlice } from './userSlice';
import { useEffect, useState } from 'react';

function User() {
   const store = useStore();
   const [user, setUser] = useState(store.getState().user);

   const handleSubmit = () => {
      const data = 'Peter Parker';
      const name = data.split(' ');
      store.dispatch(
         userSlice.actions.updateFirstName({
            firstName: name[0],
            lastName: name[1],
         })
      );
   };

   useEffect(() => {
      store.subscribe(() => setUser(store.getState().user));
   });

   return (
      <div className="header">
         <h1>
            Welcome back
            <br />
            {user.firstName} {user.lastName} !
         </h1>
         <button className="edit-button" onClick={() => handleSubmit()}>
            Edit Name
         </button>
      </div>
   );
}

export default User;
