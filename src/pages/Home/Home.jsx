import { useEffect, useState } from 'react';
import { Header } from '../../components/Header';
import { connectApi } from '../../services/api-connect';
import { ContaiberHome, DivCardsPokemons } from './style';
import { CardPokemon } from '../../components/CardPokemon';

export function Home() {
  const [pokemons, setPokemons] = useState([{}]);
  const [name, setName] = useState('');

  useEffect(() => {
    setName(localStorage.getItem('user'));
    (async () => {
      for (let i = 0; i < 50; i++) {
        await connectApi.get(`/pokemon/${i + 1}`).then((res) => {
          const response = res.data;

          if (response.id in pokemons) {
            return;
          } else {
            setPokemons([response, ...pokemons]);
          }
        });
      }
    })();
  }, [pokemons]);

  return (
    <ContaiberHome>
      <Header nameUser={name.toLocaleUpperCase()} />
      <DivCardsPokemons>
        <CardPokemon/>
        <CardPokemon/>
        <CardPokemon/>
        <CardPokemon/>
        <CardPokemon/>
        <CardPokemon/>
        <CardPokemon/>
        <CardPokemon/>
        <CardPokemon/>
        <CardPokemon/>
        <CardPokemon/>
        <CardPokemon/>
        <CardPokemon/>
        <CardPokemon/>
        <CardPokemon/>
        <CardPokemon/>
        <CardPokemon/>
        <CardPokemon/>
        <CardPokemon/>
        <CardPokemon/>
        <CardPokemon/>
        <CardPokemon/>
        <CardPokemon/>
        <CardPokemon/>
        <CardPokemon/>
        <CardPokemon/>
        <CardPokemon/>
        <CardPokemon/>
        <CardPokemon/>
        <CardPokemon/>
      </DivCardsPokemons>
    </ContaiberHome>
  );
}
