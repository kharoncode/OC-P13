import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from '@components/footer/Footer';
import Header from '@components/header/Header';
import Home from '@pages/home/Home';
import SignIn from '@pages/signIn/SignIn';

function App() {
   return (
      <Router>
         <Header />
         <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sign-in" element={<SignIn />} />
         </Routes>
         <Footer />
      </Router>
   );
}

export default App;
