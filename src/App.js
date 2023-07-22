import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

// pages
import Home from './pages/Home';
import Profile from './pages/Profile/Profile';
import Auth from './pages/Auth/Auth';
import Upload from './components/Upload/Upload';


import './App.css';

const App = () => {
  const user = useSelector((state) => state.authReducer.authData);
  return (
    <div>
      <div>
        <Routes>
          <Route
            exact path='/'
            element={<Home />}
          />
          <Route
            exact path='/upload'
            element={<Upload />}
          />
          <Route
            exact path='/profile/:id'
            element={<Profile />}
          />
          {/* <Route
            exact path='/'
            element={user ? <Navigate to="home" /> : <Navigate to="auth" />}
          />
          <Route
            exact path='/home'
            element={user ? <Home /> : <Navigate to="../auth" />}
          />
          <Route
            exact path='/auth'
            element={user ? <Navigate to="../home" /> : <Auth />}
          />
          <Route
            exact path='/profile/:id'
            element={user ? <Profile /> : <Navigate to="../auth" />}
          />
          <Route
            exact path='/profile/:id'
            element={user ? <Profile /> : <Navigate to="../auth" />}
          />
          <Route
            exact path='*'
            element={
              <main style={{ padding: "1rem" }}>
                <p>There's nothing here!</p>
              </main>
            }
          /> */}
        </Routes>
      </div>
    </div>
  )
}

export default App;
