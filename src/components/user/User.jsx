import { useDispatch, useSelector } from 'react-redux';
import { updateProfile } from '../../pages/profile/profileSlice';
import { getToken, getUser } from '../../router/selectors';

function User() {
   const user = useSelector(getUser);
   const token = useSelector(getToken);
   const dispatch = useDispatch();

   const handleSubmit = () => {
      const data = 'Peter Parker';
      const name = data.split(' ');
      const dataS = {
         firstName: name[0],
         lastName: name[1],
      };
      dispatch(updateProfile({ name: dataS, token: token }));
      // store.dispatch(
      //    profileSlice.actions.updateFirstName({
      //       firstName: name[0],
      //       lastName: name[1],
      //    })
      // );
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
