import poke from '../../assets/pokebola.png';
import { addFavorite, removeFavorite } from '../../services/fake-db';
import { DivFav, Favorites, FavoritesClicked } from './style';

// eslint-disable-next-line react/prop-types
export function FavoriteButton({ user, number, clicked }) {
  function handleTrue(event) {
    event.stopPropagation();
    const user = localStorage.getItem('user');
    const parseUser = JSON.parse(user);
    clicked('favorite');
    addFavorite(parseUser.email, number);
  }

  function handleFalse(event) {
    event.stopPropagation();
    const user = localStorage.getItem('user');
    const parseUser = JSON.parse(user);
    clicked('favorite');
    removeFavorite(parseUser.email, number);
  }

  return (
    <DivFav>
      {user.favorites?.includes(number) ? (
        <FavoritesClicked src={poke} onClick={(e) => handleFalse(e)} />
      ) : (
        <Favorites src={poke} onClick={(e) => handleTrue(e)} />
      )}
    </DivFav>
  );
}
