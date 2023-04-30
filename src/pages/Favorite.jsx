import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CardPokemon } from '../components/CardPokemon';
import { connectApi } from '../services/api-connect';

export function Favorite() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('user'));
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const array = Promise.all(
      user.favorites.map((e) => {
        connectApi.get(e.url).then((res) => res.data);
      })
    );
    setFavorites(array);
  }, [favorites, user.favorites]);

  return (
    <div style={{ backgroundColor: 'black', width: '100vw', height: '100vh' }}>
      <button onClick={() => navigate('/home-page')}></button>

      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {favorites.map((e, index) => {
          let type = [];
          if (Array.isArray(e.types)) {
            for (let i of e.types) {
              type.push(i.type.name);
            }
          }
          const image = e.sprites?.other['official-artwork'].front_default;
          return (
            <CardPokemon
              key={index}
              imgPokemon={image}
              pokemonNumber={e.id}
              pokemonName={e.name}
              pokemonTypes={type}
            />
          );
        })}
      </div>
    </div>
  );
}
