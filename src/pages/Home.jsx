import { useEffect, useState } from 'react';
import { connectApi, url } from '../services/api-connect';

export function Home() {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    (async () => {
      for (let i = 1; i < 5; i++) {
        await connectApi.get(url, `/${i}`).then((res) => {
          sessionStorage.setItem('list', res.data);
        });
      }
    })();
  }, []);

  setPokemons(sessionStorage.getItem('list'));

  if (pokemons.length == 0) {
    return <h1>Error</h1>;
  }

  return (
    <>
      <img src={pokemons[0].sprites.front_default} alt="" />
    </>
  );
}
