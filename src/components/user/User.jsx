import { useSelector, useStore } from 'react-redux';
import { profileSlice } from '../../pages/profile/profileSlice';
import { getUser } from '../../router/selectors';

function User() {
   const store = useStore();
   const user = useSelector(getUser);

   const handleSubmit = () => {
      const data = 'Peter Parker';
      const name = data.split(' ');
      store.dispatch(
         profileSlice.actions.updateFirstName({
            firstName: name[0],
            lastName: name[1],
         })
      );
   };

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
