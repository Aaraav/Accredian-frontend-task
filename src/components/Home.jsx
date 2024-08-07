// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import Herosection from './Herosection';
import { useKindeAuth } from '@kinde-oss/kinde-auth-react';
import Referform from './Referform';
import ReferProcess from './ReferProcess';
import Tablesection from './Tablesection';
import Question from './Question';
import Footer from './Footer';
import Navbar from './Navbar';

export default function Home() {
  const { isAuthenticated } = useKindeAuth();
  const [ showReferForm , setShowReferForm ] = useState(false);

  const toggleReferForm = () => {
    setShowReferForm(!showReferForm); 
  };

  return (
    <>
      { isAuthenticated &&
        <>
          <Navbar/>

          <Herosection toggleReferForm={toggleReferForm} />

          {showReferForm && <Referform onCancel={toggleReferForm} />}

          <ReferProcess toggleReferForm={toggleReferForm}/>

          <Tablesection toggleReferForm={toggleReferForm}/>

          <Question/>

          <Footer/>
        </>
      }
    </>
  );
}
