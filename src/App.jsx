import './App.css';
import Signup from './components/Signup';
import Home from './components/Home';
import { useKindeAuth } from '@kinde-oss/kinde-auth-react';

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
