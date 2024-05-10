import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Lessons from './pages/Lesson/lessons';
import NotFoundPage from './pages/NotFoundPage';
import ProfilePage from './pages/ProfilePage';
import Quizzes from './pages/Quiz/quizzes';
import RegistrationPage from './pages/RegistrationPage';

const App = () =>  {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/lesson" element={<Lessons/>} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/quiz" element={<Quizzes/>} />
        <Route path="/register" element={<RegistrationPage/>}/>
        <Route element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}

export default App;
