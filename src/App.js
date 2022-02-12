import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Home } from './components/home/Home';
import { ErrorPage } from './components/ui/ErrorPage';

import { Navbar } from './components/ui/Navbar';
import { SearchBar } from './components/ui/SearchBar';
import { SerieNumbers } from './components/home/SerieNumbers';
import { ModalError } from './components/ui/ModalError';

function App() {
  return (
    <Router>
      <ModalError />
      <Navbar />
      <SearchBar />
      <SerieNumbers />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
}

export default App;
