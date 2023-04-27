import { useNavigate } from 'react-router-dom';

export function Favorite() {
  const navigate = useNavigate();
  return (
    <div style={{ backgroundColor: 'black', width: '100vw', height: '100vh' }}>
      <button onClick={() => navigate('/home-page')}></button>
    </div>
  );
}
