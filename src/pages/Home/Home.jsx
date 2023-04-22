import { useEffect, useState } from 'react';
import { Header } from '../../components/Header';
import { connectApi } from '../../services/api-connect';
import { ContaiberHome } from './style';

export function Home() {
  const [pokemons, setPokemons] = useState([{}]);
  const [name, setName] = useState('');

  useEffect(() => {
    setName(localStorage.getItem('user'));
    (async () => {
      for (let i = 0; i < 50; i++) {
        await connectApi.get(`/pokemon/${i + 1}`).then((res) => {
          const response = res.data;

          if(response.id in pokemons){
            return
          }else{
            setPokemons([response, ...pokemons]);
          }
        });
      }
    })();
  }, [pokemons]);

  return (
    <ContaiberHome>
      <Header nameUser={name.toLocaleUpperCase()} />
      <div style={{ width: '60%' }}>
        {pokemons.map((e, index) => {
          let image = e.sprites?.other.dream_world.front_default;
          console.log(e.sprites?.other.dream_world.front_default);
          return (
            <div key={index}>
              <img src={image} alt="" />
            </div>
          );
        })}
      </div>
    </ContaiberHome>
  );
}
