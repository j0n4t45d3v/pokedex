import { useEffect, useState } from 'react';
import { CardPokemon } from '../../components/CardPokemon';
import { Header } from '../../components/Header';
import { Menu } from '../../components/Menu';
import { connectApi } from '../../services/api-connect';
import { ContaiberHome, DivCardsPokemons } from './style';

export function Home() {
  const [pokemons, setPokemons] = useState([{}]);
  const [statuMenu, setStatuMenu] = useState(false);
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
      <Header nameUser={name.toLocaleUpperCase()} openMenu={setStatuMenu} statu={statuMenu}/>
      {statuMenu && <Menu/>}
      <DivCardsPokemons>
        {pokemons.map((e, index) => {
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
      </DivCardsPokemons>
    </ContaiberHome>
  );
}
