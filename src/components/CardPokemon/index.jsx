import ColorThief from 'colorthief';
import { useEffect, useState } from 'react'; '../../services/fake-db';
import {
  ContainerCard,
  Header,
  ImagePokemon,
  PokemonName,
  PokemonNumber,
  PokemonType,
} from './style';
import { FavoriteButton } from '../FavPoke';

export function CardPokemon({
  imgPokemon,
  pokemonNumber,
  pokemonName,
  pokemonTypes,
  objctPoke,
  objctPokeHome,
}) {
  const [clicked, setClicked] = useState('');
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')));
  const [bgColor, setBgColor] = useState('');

  useEffect(() => {
    getDominantColor(imgPokemon).then((color) => {
      setBgColor(`rgb(${color[0]}, ${color[1]}, ${color[2]})`);
    });
  }, [imgPokemon]);

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem('user')));
  }, [user]);

  function getDominantColor(imageUrl) {
    const img = new Image();
    img.crossOrigin = 'Anonymous';
    img.src = imageUrl;
    return new Promise((resolve) => {
      img.onload = () => {
        const colorThief = new ColorThief();
        const color = colorThief.getColor(img);
        resolve(color);
      };
    });
  }

  function descriptionFun() {
    objctPokeHome(objctPoke);
  }

  return (
    <ContainerCard
      onClick={() => descriptionFun(pokemonName)}
      style={{ backgroundColor: bgColor }}
    >
      <Header>
        <PokemonNumber>#{pokemonNumber}</PokemonNumber>
        <FavoriteButton number={pokemonNumber} user={user} clicked={setClicked}/>
      </Header>
      <ImagePokemon src={imgPokemon} />
      <PokemonName>{pokemonName}</PokemonName>
      <div style={{ display: 'flex', flexDirection: 'row', gap: 10 }}>
        {pokemonTypes.map((e, index) => {
          return <PokemonType key={index}>{e}</PokemonType>;
        })}
      </div>
    </ContainerCard>
  );
}
