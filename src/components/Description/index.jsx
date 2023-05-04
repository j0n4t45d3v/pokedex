import { MainContainer } from "./style";

export function Description({pokemon}){
  return <MainContainer>
    <p>{pokemon.name}</p>
  </MainContainer>
}