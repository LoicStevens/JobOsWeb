
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

import ProfileComplete from './pages/ProfileComplete';
import ProfilePage from './pages/ProfilePage';
import ChatInterface from './pages/ChatInterface';
import Announcement from './pages/Announcement';
import JobDetail from './pages/JobDetail';
import Blog from './components/Blog';
import ProfileClient from './pages/ProfileClient';
import ProposalsList from './pages/ProposalsList';
import CVPreview from './pages/CVPreview';

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Route pour la page de connexion */}
        <Route path="/login" element={<Login />} />
        <Route path="/chat" element={<ChatInterface />} />
        <Route path="/profil-completion" element={<ProfileComplete />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/profileClient" element={<ProfileClient />} />
        <Route path="/proposals" element={<ProposalsList />} />
        
        {/* Route pour la page d'inscription */}
        
        <Route path="/home-client" element={<Home />} />
        <Route path="/home-prestataire" element={<HomePrestataire />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgotPassword" element={<ForgotPassword />} />
        <Route path="/resetPassword" element={<ResetPassword />} />
        <Route path="/otpVerification" element={<OtpVerification />} />
        <Route path="/announcement" element={<Announcement />} />
        <Route path='/detail' element={<JobDetail />} />
        <Route path='/blog' element={<Blog />} />
        <Route path="/cv-preview" element={<CVPreview />} />
        {/* Tu peux ajouter d'autres routes ici */}
        
      </Routes>
    </Router>
  );
};

export default App;