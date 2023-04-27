import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Movie from './pages/Movie';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/movie/:id" element={<Movie/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
