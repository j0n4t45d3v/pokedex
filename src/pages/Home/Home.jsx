import { useEffect, useState } from 'react';
import { Header } from '../../components/Header';
import { connectApi } from '../../services/api-connect';
import { ContaiberHome } from './style';

export function Home() {
  const [pokemons, setPokemons] = useState([{}]);

  useEffect(() => {
    connectApi
      .get('/pokemon', {
        params: {
          limit: 50,
        },
      })
      .then((res) => {
        const response = res.data.results;
        response.map(async (e) => {
          connectApi.get(e.url).then((r) => {
            setPokemons([...pokemons, r.data]);
          });
        });
      });
  }, [pokemons]);
  return (
    <ContaiberHome>
      <Header />
    </ContaiberHome>
  );
}
