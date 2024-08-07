import React from 'react';
import { Route, Routes } from 'react-router-dom';
import IntroPage from './pages/IntroPage/IntroPage';
import MainPage from './pages/MainPage/MainPage';
import NotFound from './pages/404/NotFound';
import { AuthContextProvider } from './context/AuthContext';
import Modal from './pages/Modal/Modal';
import Private from './components/Private/Private';
import ContextProvider from './context/Context';

const App = () => {
  return (
    <AuthContextProvider>
      <ContextProvider>
      <Routes>
        <Route path='/' element={<IntroPage />} />
        <Route path='/main' element={<Private><MainPage /></Private>} />
        <Route path='/login' element={<Modal />} />
        <Route path='*' element={<NotFound />} />
      </Routes> 
      </ContextProvider>
    </AuthContextProvider>
  );
};

export default App;
