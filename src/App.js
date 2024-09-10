import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';

const Navigation = () => (
  <nav className="bg-blue-600 p-4">
    <ul className="flex space-x-4 text-white">
      <li><Link to="/">Home</Link></li>
      <li><Link to="/tas">TAs</Link></li>
      <li><Link to="/diversity">Diversity & Inclusion</Link></li>
      <li><Link to="/career">Tech Career Development</Link></li>
      <li><Link to="/programmers">Programmers</Link></li>
      <li><Link to="/clubs">Clubs</Link></li>
    </ul>
  </nav>
);

const Home = () => (
  <div className="container mx-auto p-4">
    <h1 className="text-2xl font-bold mb-4">Welcome to the Computer Science Department</h1>
    <p>Basic information about classes and professors will go here.</p>
  </div>
);

const TAs = () => (
  <div className="container mx-auto p-4">
    <h1 className="text-2xl font-bold mb-4">Teaching Assistants</h1>
    <p>Pictures and information about all of the TAs will go here.</p>
  </div>
);

const DiversityInclusion = () => (
  <div className="container mx-auto p-4">
    <h1 className="text-2xl font-bold mb-4">Diversity and Inclusion</h1>
    <p>Information about what the Diversity and Inclusion committee is doing will go here.</p>
  </div>
);

const CareerDevelopment = () => (
  <div className="container mx-auto p-4">
    <h1 className="text-2xl font-bold mb-4">Tech Career Development</h1>
    <p>Information about technical career development plans will go here.</p>
  </div>
);

const Programmers = () => (
  <div className="container mx-auto p-4">
    <h1 className="text-2xl font-bold mb-4">Programmers</h1>
    <p>Information for Programmers will go here.</p>
  </div>
);

const Clubs = () => (
  <div className="container mx-auto p-4">
    <h1 className="text-2xl font-bold mb-4">Computer Science Clubs</h1>
    <p>Information about Computer Science Clubs will go here.</p>
  </div>
);

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tas" element={<TAs />} />
          <Route path="/diversity" element={<DiversityInclusion />} />
          <Route path="/career" element={<CareerDevelopment />} />
          <Route path="/programmers" element={<Programmers />} />
          <Route path="/clubs" element={<Clubs />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
