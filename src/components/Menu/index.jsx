import { useNavigate } from 'react-router-dom';
import { ContainerMenu, Logout, OptionsMenu } from './style';

export function Menu() {
  const navigate = useNavigate();

  function handleLogout() {
    localStorage.removeItem('user');
    navigate('/');
  }

  function handleFavorite() {
    const user = JSON.parse(localStorage.getItem('user'));
    console.log(user);
    console.log(user.favorites.length);
    if (user.favorites.length > 0) {
      navigate('/favorite');
      return;
    }
    alert('Você não tem nenhum pokemon favorito \nadicione um para acessar essa pagina');
  }

  return (
    <ContainerMenu>
      <OptionsMenu onClick={() => handleFavorite()}>Favoritos</OptionsMenu>
      <Logout onClick={handleLogout}>SAIR</Logout>
    </ContainerMenu>
  );
}
