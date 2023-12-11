import { useEffect, useState } from 'react';

function CallApi(user) {
   const [result, setResult] = useState({});

   async function postJSON(data) {
      try {
         const response = await fetch(
            'http://localhost:3001/api/v1/user/login',
            {
               method: 'POST', // or 'PUT'
               headers: {
                  'Content-Type': 'application/json',
               },
               body: JSON.stringify(data),
            }
         );

         const result = await response.json();
         setResult(result);
         console.log('Success:', result);
      } catch (error) {
         console.error(' ----- Error -----', error);
      }
   }

   useEffect(() => {
      postJSON(user);
   }, []);

   return result;
}

export default CallApi;
