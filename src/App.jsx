import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'eact-router-dom';
import Signup from './components/Signup';
import Home from './components/Home';
import AuthCallback from './components/AuthCallback';

const App = () => (
  <Router>
    <div>
      <Routes>
        <Route path="" element={<Signup />} />
        <Route path="/home" element={<Home />} />
        <Route path="/auth/callback" element={<AuthCallback />} />
      </Routes>
    </div>
  </Router>
);

export default App;