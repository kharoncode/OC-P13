import { useEffect, useState } from 'react';

function GetProfile(body) {
   const [data, setData] = useState({});

   async function postJSON(body) {
      const token = body?.token;
      try {
         const response = await fetch(
            'http://localhost:3001/api/v1/user/profile',
            {
               method: 'POST', // or 'PUT'
               headers: {
                  'Content-Type': 'application/json',
                  Authorization: `Bearer ${token}`,
               },
            }
         );

         const result = await response.json();
         setData(result);
         console.log('Success:', result);
      } catch (error) {
         console.error(' ----- Error -----', error);
      }
   }

   useEffect(() => {
      postJSON(body);
   }, [body]);

   return data;
}

export default GetProfile;
