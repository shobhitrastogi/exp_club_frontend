import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import BookListPage from './pages/BookListPage';
import BookDiscoveryPage from './pages/BookDiscoveryPage';
import MatchmakingPage from './pages/MatchmakingPage';
import Header from './components/Header';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/books" element={<BookListPage />} />
        <Route path="/discover" element={<BookDiscoveryPage />} />
        <Route path="/matches" element={<MatchmakingPage />} />
      </Routes>
    </Router>
  );
};

export default App;
