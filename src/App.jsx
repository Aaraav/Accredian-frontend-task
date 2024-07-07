import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Signup from './components/Signup';
import Home from './components/Home';

const App = () => (
  
  <Router>
    <Routes>
      {/* Route without Navbar */}
      <Route path='/' element={<Signup />} />
      <Route path='/home' element={<>
        <Navbar />
        <Home/>
      </>} />

    </Routes>
  </Router>
);

export default App;
