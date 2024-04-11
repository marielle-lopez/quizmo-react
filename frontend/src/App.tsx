import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home';
import Play from './pages/Play/Play';
import Profile from './pages/Profile/Profile';
import Header from './containers/Header/Header';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route element={<Home />} path="/" />
          <Route element={<Play />} path="/play" />
          <Route element={<Profile />} path="/profile" />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
