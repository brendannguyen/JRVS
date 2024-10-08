/**
 * @file App.jsx
 * @description Main application component that sets up routing for the entire application using React Router.
 * This file defines all routes and their associated components, including protected routes that require authentication.
 *
 */

import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Lessons from "./pages/Lesson/lessons";
import NotFoundPage from "./pages/NotFoundPage";
import ProfilePage from "./pages/ProfilePage";
import CustomizePage from "./pages/CustomizePage";
import Quizzes from "./pages/Quiz/quizzes";
import LearningPathPage from "./pages/LearningPathPage";
import UnitsPage from "./pages/UnitsPage";
import RegistrationPage from "./pages/RegistrationPage";
import LoginPage from "./pages/LoginPage";
import ProtectedRoute from "./components/ProtectedRoute";
import Videos from "./pages/Video/videos";
import EditLesson from "./pages/Lesson/editLesson";
import EditProfile from "./pages/EditProfile";
import LeaderboardPage from "./pages/LeaderboardPage";
import EditTrueFalse from "./pages/Quiz/editTrueFalse";
import EditImageQuiz from "./pages/Quiz/editImageQuiz";
import EditVideo from "./pages/Video/editVideo";
import EditShortAnswerQuestion from "./pages/Quiz/EditShortAnswer";
import EditDragDrop from "./pages/Quiz/EditDragDrop";
import EditMultipleChoice from "./pages/Quiz/editMultipleChoice";
import EditReorderQuestion from "./pages/Quiz/EditReorder";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/leaderboard" element={<ProtectedRoute />}>
          <Route exact path="/leaderboard" element={<LeaderboardPage />} />
        </Route>
        <Route exact path="/" element={<ProtectedRoute />}>
          <Route exact path="/" element={<UnitsPage />} />
        </Route>
        <Route exact path="/lesson/:lessonId" element={<ProtectedRoute />}>
          <Route exact path="/lesson/:lessonId" element={<Lessons />} />
        </Route>
        <Route exact path="/edit/:lessonId" element={<ProtectedRoute />}>
          <Route exact path="/edit/:lessonId" element={<EditLesson />} />
        </Route>
        <Route exact path="/learningPath/:unitId" element={<ProtectedRoute />}>
          <Route
            exact
            path="/learningPath/:unitId"
            element={<LearningPathPage />}
          />
        </Route>
        <Route exact path="/profile" element={<ProtectedRoute />}>
          <Route exact path="/profile" element={<ProfilePage />} />
        </Route>
        <Route exact path="/customize" element={<ProtectedRoute />}>
          <Route exact path="/customize" element={<CustomizePage />} />
        </Route>
        <Route exact path="/quiz/:quizId" element={<ProtectedRoute />}>
          <Route exact path="/quiz/:quizId" element={<Quizzes />} />
        </Route>
        <Route
          exact
          path="/quiz/short-answer/edit/:quizId"
          element={<ProtectedRoute />}
        >
          <Route
            exact
            path="/quiz/short-answer/edit/:quizId"
            element={<EditShortAnswerQuestion />}
          />
        </Route>
        <Route
          exact
          path="/quiz/drag-drop/edit/:quizId"
          element={<ProtectedRoute />}
        >
          <Route
            exact
            path="/quiz/drag-drop/edit/:quizId"
            element={<EditDragDrop />}
          />
        </Route>
        <Route
          exact
          path="/quiz/imagequiz/edit/:quizId"
          element={<ProtectedRoute />}
        >
          <Route
            exact
            path="/quiz/imagequiz/edit/:quizId"
            element={<EditImageQuiz />}
          />
        </Route>
        <Route
          exact
          path="/quiz/truefalse/edit/:quizId"
          element={<ProtectedRoute />}
        >
          <Route
            exact
            path="/quiz/truefalse/edit/:quizId"
            element={<EditTrueFalse />}
          />
        </Route>
        <Route
          exact
          path="/quiz/multiplechoice/edit/:quizId"
          element={<ProtectedRoute />}
        >
          <Route
            exact
            path="/quiz/multiplechoice/edit/:quizId"
            element={<EditMultipleChoice />}
          />
        </Route>
        <Route
          exact
          path="/quiz/reorder/edit/:quizId"
          element={<ProtectedRoute />}
        >
          <Route
            exact
            path="/quiz/reorder/edit/:quizId"
            element={<EditReorderQuestion />}
          />
        </Route>
        <Route exact path="/video/:videoId" element={<ProtectedRoute />}>
          <Route exact path="/video/:videoId" element={<Videos />} />
        </Route>
        <Route exact path="/video/edit/:videoId" element={<ProtectedRoute />}>
          <Route exact path="/video/edit/:videoId" element={<EditVideo />} />
        </Route>
        <Route exact path="/units" element={<ProtectedRoute />}>
          <Route exact path="/units" element={<UnitsPage />} />
        </Route>
        <Route exact path="/editprofile" element={<ProtectedRoute />}>
          <Route exact path="/editprofile" element={<EditProfile />} />
        </Route>
        <Route path="/register" element={<RegistrationPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
};

export default App;
