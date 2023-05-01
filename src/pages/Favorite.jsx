import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { connectApi } from '../services/api-connect';
import { CardPokemon } from '../components/CardPokemon';

export function Favorite() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('user'));
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const fetchFavorites = async () => {
      try {
        const favoritesArray = await Promise.all(
          user.favorites.map(async (e) => {
            const response = await connectApi.get(`pokemon/${e}`);
            return response.data;
          })
        );
        setFavorites(favoritesArray);
      } catch (error) {
        console.error(error);
      }
    };
    fetchFavorites();
  }, [user.favorites]);

  return (
    <div style={{ backgroundColor: 'black', width: '100vw', height: '100vh' }}>
      <button onClick={() => navigate('/home-page')}>Voltar para a Home</button>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 20 }}>
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
