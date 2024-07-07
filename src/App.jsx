import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Signup from './components/Signup';
import Home from './components/Home';

const App = () => (
  <Router>
    <div>
      <Routes>
        {/* Route for Signup */}
        <Route path="/" element={<Signup />} />
        
        {/* Route for Home */}
        <Route path="/home" element={<Home />} />
      </Routes>
    </div>
  </Router>
);

export default App;
