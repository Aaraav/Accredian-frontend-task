import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signup from './components/Signup';
import Home from './components/Home';

const App = () => (
  <Router>
    <div>
      <Routes>
        <Route path="" element={<Signup />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </div>
  </Router>
);

export default App;
