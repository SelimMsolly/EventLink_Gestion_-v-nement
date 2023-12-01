import React from 'react';
import LoginForm from './Components/Front/login.jsx';
import RegistrationForm from './Components/Front/registration';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './Components/Front/home.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/login' element={<LoginForm />} />
        <Route path='/registration-form' element={<RegistrationForm />} />
        <Route path='/Home' element={<Home />} />
        {/* Redirect to /login by default */}
        <Route index element={<Navigate to="/login" />} />
      </Routes>
    </Router>
  );
}

export default App;