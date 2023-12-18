import { useDispatch, useSelector } from 'react-redux';
import { updateProfile } from '@pages/profile/profileSlice';
import { getUser, returnToken } from '@router/selectors';
import { useState } from 'react';

function User() {
   const [isOpen, setOpen] = useState(false);
   const user = useSelector(getUser);
   const token = returnToken();
   const dispatch = useDispatch();

   const editModale = () => {
      setOpen(!isOpen);
   };

   const handleSubmit = (e) => {
      e.preventDefault();
      const firstName = e.currentTarget.firstName.value;
      const lastName = e.currentTarget.lastName.value;
      dispatch(
         updateProfile({
            name: {
               firstName: firstName === '' ? user.firstName : firstName,
               lastName: lastName === '' ? user.lastName : lastName,
            },
            token: token,
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

         {isOpen ? (
            <form className="editModale" onSubmit={(e) => handleSubmit(e)}>
               <div className="editModale-container">
                  <label htmlFor="firstName"></label>
                  <input
                     type="text"
                     id="firstName"
                     placeholder={user.firstName}
                  />
                  <button type="submit" className="edit-button left">
                     Edit
                  </button>
               </div>
               <div className="editModale-container">
                  <label htmlFor="lastName"></label>
                  <input
                     type="text"
                     id="lastName"
                     placeholder={user.lastName}
                  />
                  <button
                     className="edit-button right"
                     onClick={() => editModale()}
                  >
                     Close
                  </button>
               </div>
            </form>
         ) : (
            <button className="edit-button" onClick={() => editModale()}>
               Edit Name
            </button>
         )}
      </div>
   );
}

export default User;
