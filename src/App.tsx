import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import BookList from './pages/BookList';
import Book from './pages/Book';

function App() {
  return (
    <>
      <nav>
        <div className="flex flex-row space-x-6">
          <Link to="/">Home</Link>
          <Link to="/books">Books</Link>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books" element={<BookList />} />
        <Route path="/books/:id" element={<Book />} />
      </Routes>
    </>
  );
}

export default App;
