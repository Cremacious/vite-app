import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Activities from './pages/Activities';

function App() {
  return (
    <>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/activities">Activities</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/activities" element={<Activities />} />
      </Routes>
    </>
  );
}

export default App;
