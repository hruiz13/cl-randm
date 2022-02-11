import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Home } from './components/home/Home';
import { ErrorPage } from './components/ui/ErrorPage';
import { Provider } from 'react-redux';
import { store } from './store/store';
import { Navbar } from './components/ui/Navbar';
import { SearchBar } from './components/ui/SearchBar';
import { SerieNumbers } from './components/home/SerieNumbers';

function App() {
  return (
    <Provider store={store}>

      <Router>
        <Navbar />
        <SearchBar />
        <SerieNumbers />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
