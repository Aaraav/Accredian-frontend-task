import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signup from './components/Signup';
import Home from './components/Home';
import Redirect from './components/Redirect';
import { useKindeAuth } from '@kinde-oss/kinde-auth-react';
const Not=()=>{
  return(
    <h1>jcwdwdwcd</h1>
  )
}
function App() {
  const { isAuthenticated } = useKindeAuth();
  if(isAuthenticated){
  return <Home/> ;

  }
  else {
    return <Signup/>
  }
  
  
}

export default App;
