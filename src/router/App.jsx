import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from '@components/footer/Footer';
import Header from '@components/header/Header';
import Home from '@pages/home/Home';
import SignIn from '@pages/signIn/SignIn';
import User from '@pages/user/User';

function App() {
   return (
      <Router>
         <Header />
         <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sign-in" element={<SignIn />} />
            <Route path="/user" element={<User />} />
         </Routes>
         <Footer />
      </Router>
   );
}

export default App;
