 
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import {HomePage,QuestionPage,AdminPage} from './pages';
import {Navbar} from './components';

export const AppRouter=()=> {
  return (
    <>
        <Navbar />
        <Routes>
            <Route path='/' element={<HomePage />}/>
            <Route path='pregunta' element={<QuestionPage />} />
            <Route path='admin' element={<AdminPage />} />
        </Routes>
    </>
    
  );
};