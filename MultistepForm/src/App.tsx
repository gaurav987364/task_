import React from 'react';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import FormLayout from './Layout/FormLayout';
import UserInfo from './pages/UserInfo';
import Address from './pages/Address';
import Review from './pages/Review';
import { ThemeProvider } from './context/ThemeContext';

const App:React.FC = () => {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/formlayout' element={<FormLayout/>}>
              <Route path='/formlayout/info' element={<UserInfo/>}/>
              <Route path='/formlayout/address' element={<Address/>}/>
              <Route path='/formlayout/review' element={<Review/>}/>
            </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App;