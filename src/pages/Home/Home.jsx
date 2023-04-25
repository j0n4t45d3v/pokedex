import { useEffect, useState } from 'react';
import { CardPokemon } from '../../components/CardPokemon';
import { Header } from '../../components/Header';
import { connectApi } from '../../services/api-connect';
import { ContaiberHome, DivCardsPokemons } from './style';

export function Home() {
  const [pokemons, setPokemons] = useState([{}]);
  const [name, setName] = useState('');

  useEffect(() => {
    setName(localStorage.getItem('user'));

    connectApi.get(`/pokemon/?offset=0&limit=50`).then(async (res) => {
      const results = res.data.results;
      let pokemonArray = await Promise.all(
        results.map(async (e) => connectApi.get(e.url).then((res) => res.data))
      );
      setPokemons(pokemonArray);
    });
  }, []);

  return (
    <ContaiberHome>
      <Header nameUser={name.toLocaleUpperCase()} />
      <DivCardsPokemons>
        {pokemons.map((e, index) => {
          const image = e.sprites?.other.dream_world.front_default;
          return <CardPokemon key={index} imgPokemon={image} />;
        })}
      </DivCardsPokemons>
    </ContaiberHome>
  );
}
