import { useNavigate } from 'react-router-dom';
import { RegisterComponent } from '../components/Register';
import { insertUser } from '../services/fake-db';

export function Register() {
  const navigate = useNavigate();
  function addUser(body) {
    const { username, fullName, email, password } = body;
    const add = insertUser(body);

    if (add === 'OK' && username && fullName && email && password) {
      navigate('/');
    } else {
      alert('Todos os campos são obrigatorios');
    }
  }
  return <RegisterComponent addUser={addUser} />;
}
