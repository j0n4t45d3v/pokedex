import ColorThief from 'colorthief';
import { useEffect, useState } from 'react';
import poke from '../../assets/pokebola.png';
import {
  addFavorite,
  getFavorites,
  removeFavorite,
} from '../../services/fake-db';
import {
  ContainerCard,
  Favorites,
  FavoritesClicked,
  Header,
  ImagePokemon,
  PokemonName,
  PokemonNumber,
  PokemonType,
} from './style';

export function CardPokemon({
  imgPokemon,
  pokemonNumber,
  pokemonName,
  pokemonTypes,
}) {
  const [clicked, setClicked] = useState(false);
  const user = JSON.parse(localStorage.getItem('user'));
  const [bgColor, setBgColor] = useState('');

  useEffect(() => {
    getDominantColor(imgPokemon).then((color) => {
      setBgColor(`rgb(${color[0]}, ${color[1]}, ${color[2]})`);
    });
  }, [imgPokemon]);

  function handleTrue() {
    const user = localStorage.getItem('user');
    const parseUser = JSON.parse(user);

    setClicked(true);
    addFavorite(parseUser.email, pokemonNumber);
    console.log(getFavorites(parseUser.email));
  }

  function handleFalse() {
    const user = localStorage.getItem('user');
    const parseUser = JSON.parse(user);

    setClicked(false);
    removeFavorite(parseUser.email, pokemonNumber);
    console.log(getFavorites(parseUser.email));
  }

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

  return (
    <ContainerCard style={{ backgroundColor: bgColor }}>
      <Header>
        <PokemonNumber>#{pokemonNumber}</PokemonNumber>
        {user.favorites.includes(pokemonNumber) ? (
          <FavoritesClicked src={poke} onClick={handleFalse} />
        ) : (
          <Favorites src={poke} onClick={handleTrue} />
        )}
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
