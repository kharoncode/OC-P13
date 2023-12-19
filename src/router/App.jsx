import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { store, persistor } from '@router/store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import PrivateRoute from '@utils/PrivateRoute';
import Footer from '@components/footer/Footer';
import Header from '@components/header/Header';
import Home from '@pages/home/Home';
import Profile from '@pages/profile/Profile';
import Login from '@pages/login/Login';
import Error from '@pages/error/error';

function App() {
   return (
      <Provider store={store}>
         <PersistGate loading={null} persistor={persistor}>
            <Router>
               <Header />
               <Routes>
                  <Route path="/" element={<Home />} />
                  <Route
                     re
                     path="/profile"
                     element={
                        <PrivateRoute>
                           <Profile />
                        </PrivateRoute>
                     }
                  />
                  <Route path="/login" element={<Login />} />
                  <Route path="*" element={<Error />} />
               </Routes>
               <Footer />
            </Router>
         </PersistGate>
      </Provider>
   );
}

export default App;
