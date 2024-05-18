import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Lessons from './pages/Lesson/lessons';
import NotFoundPage from './pages/NotFoundPage';
import ProfilePage from './pages/ProfilePage';
import CustomizePage from './pages/CustomizePage';
import Quizzes from './pages/Quiz/quizzes';
import UnitsPage from './pages/UnitsPage';
import RegistrationPage from './pages/RegistrationPage';
import LoginPage from './pages/LoginPage';
import ProtectedRoute from './components/ProtectedRoute';

const App = () =>  {
  return (
    <Router>
      <Routes>
<<<<<<< HEAD
        <Route path="/" element={<HomePage />} />
        <Route path="/lesson/:lessonId" element={<Lessons/>} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/quiz/:quizId" element={<Quizzes/>} />
        <Route path="/units" element={<UnitsPage/>} />
        <Route path = "*"element={<NotFoundPage />} />
=======
        <Route exact path="/" element={<ProtectedRoute/>}>
          <Route exact path="/" element={<HomePage />}/>
        </Route>
        <Route exact path="/lesson/:lessonId" element={<ProtectedRoute/>}>
          <Route exact path="/lesson/:lessonId" element={<Lessons/>}/>
        </Route>
        <Route exact path="/profile" element={<ProtectedRoute/>}>
          <Route exact path="/profile" element={<ProfilePage />}/>
        </Route>
        <Route exact path="/customize" element={<ProtectedRoute/>}>
          <Route exact path="/customize" element={<CustomizePage />}/>
        </Route>
        <Route exact path="/quiz" element={<ProtectedRoute/>}>
          <Route exact path="/quiz" element={<Quizzes/>}/>
        </Route>
        <Route exact path="/units" element={<ProtectedRoute/>}>
          <Route path="/units" element={<UnitsPage/>} />
        </Route>
        <Route path="/register" element={<RegistrationPage/>}/>
        <Route path="/login" element={<LoginPage/>}/>
        <Route element={<NotFoundPage />} />
>>>>>>> main
      </Routes>
    </Router>
  );
}

export default App;
