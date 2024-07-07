import { useKindeAuth } from '@kinde-oss/kinde-auth-react'
import React from 'react'
import { useNavigate } from 'react-router-dom';
export default function Redirect() {
    const {  user } = useKindeAuth();
const navigate=useNavigate();
console.log(user);
    if(user){
navigate('/home');
    }
  return (
    <div>Redirect</div>
  )
}
