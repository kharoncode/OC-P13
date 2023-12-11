import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from '@components/footer/Footer';
import Header from '@components/header/Header';
import Home from '@pages/home/Home';
import Profile from '@pages/profile/Profile';
import Login from '@pages/login/Login';

function App() {
   return (
      <Router>
         <Header />
         <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/profile" element={<Profile />} />
         </Routes>
         <Footer />
      </Router>
   );
}

export default App;
