import { Route, Routes } from 'react-router-dom';
import { Login } from './pages/Login';
import { Register } from './pages/Register';
import { Home } from './pages/Home/Home';
import { Favorite } from './pages/Favorite';
export function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/home-page" element={<Home/>} />
      <Route path="/favorite" element={<Favorite/>} />
    </Routes>
  );
}
