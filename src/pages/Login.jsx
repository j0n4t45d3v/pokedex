import { useNavigate } from 'react-router-dom';
import { LoginComponent } from '../components/Login';
import { getUser } from '../services/fake-db';

export function Login() {
  const navigate = useNavigate();

  async function login(email, password) {
    const user = await getUser(email, password);

    if (user == 'usuario não encontrado') {
      return alert('Usuario invalido');
    }

    const parseJson = JSON.stringify(user);
    localStorage.setItem('user', parseJson);
    return navigate('/home-page');
  }

  return <LoginComponent acess={login} />;
}
