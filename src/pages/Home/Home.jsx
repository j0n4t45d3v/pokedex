import { useEffect, useState } from 'react';
import { CardPokemon } from '../../components/CardPokemon';
import { Description } from '../../components/Description';
import { Header } from '../../components/Header';
import { Loading } from '../../components/Loading';
import { Menu } from '../../components/Menu';
import { connectApi } from '../../services/api-connect';
import { ContaiberHome, DivCardsPokemons } from './style';

// eslint-disable-next-line react/prop-types
export function Home() {
  const [pokemons, setPokemons] = useState([{}]);
  const [statuMenu, setStatuMenu] = useState(false);
  const [user, setUser] = useState({});
  const [namePokemon, setNamePokemon] = useState(null);

  useEffect(() => {
    const parseObject = JSON.parse(localStorage.getItem('user'));
    setUser(parseObject);
    try {
      connectApi.get(`/pokemon/?offset=0&limit=80`).then(async (res) => {
        const results = res.data.results;
        let pokemonArray = await Promise.all(
          results.map(async (e) =>
            connectApi.get(e.url).then((res) => res.data)
          )
        );
        setPokemons(pokemonArray);
      });
    } catch (error) {
      alert(error);
    }
  }, []);

  if(pokemons.length < 80){
    return <Loading />

  } 

  return (
    <ContaiberHome>
      <Header
        nameUser={user.username?.toUpperCase()}
        openMenu={setStatuMenu}
        statu={statuMenu}
      />
      {statuMenu && <Menu />}
      
      <DivCardsPokemons>
        {
          pokemons.map((e, index) => {
            let type = [];
            if (Array.isArray(e.types)) {
              for (let i of e.types) {
                type.push(i.type.name);
              }
            }
            const image = e.sprites?.other['official-artwork'].front_default;
            return (
              <>
                <CardPokemon
                  key={index}
                  imgPokemon={image}
                  pokemonNumber={e.id}
                  pokemonName={e.name}
                  pokemonTypes={type}
                  objctPoke={e}
                  objctPokeHome={setNamePokemon}
                />
              </>
            );
          })
        }
        {namePokemon && <Description close={setNamePokemon} pokemon={namePokemon} />}
      </DivCardsPokemons>
    </ContaiberHome>
  );
}
