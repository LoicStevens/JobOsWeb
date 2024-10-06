
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/Authentification/Login';   // Assurez-vous que ces fichiers existent
import Register from './pages/Authentification/Register';



const App = () => {
  return (
    <Router>
      <Routes>
        {/* Route pour la page de connexion */}
        <Route path="/login" element={<Login />} />
        
         {/* Route pour la page d'inscription */}
        
         <Route path="/register" element={<Register />} />

            
       
      </Routes>
    </Router>
  );
};

export default App;