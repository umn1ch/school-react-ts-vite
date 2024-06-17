import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Navbar from './components/Navbar';
import Header from './components/Header'
import HomePage from './pages/HomePage';
// import Gallery from './pages/Gallery';
// import Abroad from './pages/Abroad';
// import Store from './pages/Store';
// import Courses from './pages/Courses';
// import Tests from './pages/Tests';
// import Info from './pages/Info';
// import More from './pages/More';

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          {/* <Route path="/gallery" element={<Gallery />} />
          <Route path="/abroad" element={<Abroad />} />
          <Route path="/store" element={<Store />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/tests" element={<Tests />} />
          <Route path="/info" element={<Info />} />
          <Route path="/more" element={<More />} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
