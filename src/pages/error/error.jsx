import { Link } from 'react-router-dom';

function Error() {
   return (
      <div className="error-container">
         <h1>Error 404</h1>
         <Link to="/">Retourner à la page d'accueil</Link>
      </div>
   );
}

export default Error;
