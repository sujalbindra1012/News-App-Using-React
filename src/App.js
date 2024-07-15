import './App.css';
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import News from './components/News';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar';

const App = () => {
  const pageSize = 9;
  const apiKey = "5779cb500dbf47e9a3dd3dfc195aab62";

  const [progress, setProgress] = useState(0);

  const handleProgress = (progress) => {
    setProgress(progress);
  };

  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <LoadingBar
          height={3}
          color='#f11946'
          progress={progress}
        />
        <Routes>
          <Route
            exact
            path="/"
            element={<News setProgress={handleProgress} apiKey={apiKey} key="general" pageSize={pageSize} country="in" category="general" />}
          />
          <Route
            exact
            path="/business"
            element={<News setProgress={handleProgress} apiKey={apiKey} key="business" pageSize={pageSize} country="in" category="business" />}
          />
          <Route
            exact
            path="/entertainment"
            element={<News setProgress={handleProgress} apiKey={apiKey} key="entertainment" pageSize={pageSize} country="in" category="entertainment" />}
          />
          <Route
            exact
            path="/general"
            element={<News setProgress={handleProgress} apiKey={apiKey} key="general" pageSize={pageSize} country="in" category="general" />}
          />
          <Route
            exact
            path="/health"
            element={<News setProgress={handleProgress} apiKey={apiKey} key="health" pageSize={pageSize} country="in" category="health" />}
          />
          <Route
            exact
            path="/science"
            element={<News setProgress={handleProgress} apiKey={apiKey} key="science" pageSize={pageSize} country="in" category="science" />}
          />
          <Route
            exact
            path="/sports"
            element={<News setProgress={handleProgress} apiKey={apiKey} key="sports" pageSize={pageSize} country="in" category="sports" />}
          />
          <Route
            exact
            path="/technology"
            element={<News setProgress={handleProgress} apiKey={apiKey} key="technology" pageSize={pageSize} country="in" category="technology" />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
