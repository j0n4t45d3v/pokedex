import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
// import { Description } from './pages/Description';
import { Favorite } from './pages/Favorite/Favorite';
import { Home } from './pages/Home/Home';
import { Login } from './pages/Login';
import { Register } from './pages/Register';
export function App() {
  const [isLoggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    const user = localStorage.getItem('user');
    setLoggedIn(!!user);
  }, [isLoggedIn]);

  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/home-page" element={<Home />} />
      <Route path="/favorite" element={<Favorite />} />
      {/* <Route path="/description" element={<Description />} /> */}
    </Routes>
  );
}
