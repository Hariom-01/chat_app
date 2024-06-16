// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// eslint-disable-next-line no-unused-vars
import { Mainpage } from './components/Mainpage.jsx';
import Login from './Pages/Login.jsx'
import CreatePost from './Pages/create-post/CreatePost.jsx';
import Main from './Pages/Main/Main.jsx';

const App = () => {
  return (
    <Router>
      <Routes>

        <Route path='/' element={<Main />} />
        <Route path='/login' element={<Login />} />
        <Route path='/createpost' element={<CreatePost />} />

      </Routes>
    </Router>
  );
};

export default App;
