import React, { useState} from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './css/reset.css'
import './css/style.css'
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import RecordsPage from './components/RecordsPage';
import IncomePage from './components/IncomePage';
import OutcomePage from './components/OutcomePage';
import UserContext from './components/contexts/UserContext';



export default function App() {
  const [info,setInfo]=useState();
  return (
    <BrowserRouter>
          <UserContext.Provider value={{info,setInfo}}>
            <Routes>
              <Route path="/" element={<SignIn />}/>
              <Route path="/signup" element={<SignUp />}/>
              <Route path="/income" element={<IncomePage />}/>
              <Route path="/outcome" element={<OutcomePage />}/>
              <Route path="/records" element={<RecordsPage />}/>
            </Routes>
        </UserContext.Provider>
    </BrowserRouter>
  )
}

