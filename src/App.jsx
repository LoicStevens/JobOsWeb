
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/Authentification/Login';   // Assurez-vous que ces fichiers existent
import Register from './pages/Authentification/Register';
import ResetPassword from './pages/Authentification/ResetPassword';
import ForgotPassword from './pages/Authentification/ForgotPassword';
import OtpVerification from './pages/Authentification/OtpVerification';
import Home from './pages/Home';
import HomePrestataire from './pages/HomePrestataire';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Announcement from './pages/Announcement';

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Route pour la page de connexion */}
        <Route path="/login" element={<Login />} />
        
        {/* Route pour la page d'inscription */}
        
        <Route path="/home-client" element={<Home />} />
        <Route path="/home-prestataire" element={<HomePrestataire />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgotPassword" element={<ForgotPassword />} />
        <Route path="/resetPassword" element={<ResetPassword />} />
        <Route path="/otpVerification" element={<OtpVerification />} />
        <Route path="/announcement" element={<Announcement />} />
        {/* Tu peux ajouter d'autres routes ici */}
        
      </Routes>
    </Router>
  );
};

export default App;