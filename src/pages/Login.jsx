import { LoginComponent } from '../components/Login';
import { getUser } from '../services/fake-db';

export function Login() {
  async function login(email, password) {
    const user = await getUser(email, password);
    console.log(user);
    localStorage.setItem('user', user);
    if(user === undefined){
      return alert("Usuario invalido")
    }

    
  }

  return <LoginComponent acess={login}/>;
}
