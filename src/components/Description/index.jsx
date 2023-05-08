import {
  Close,
  Container,
  Descriptions,
  DescriptionsLi,
  Image,
  MainContainer,
  NumName,
  Number,
  PStatus,
  StatusBar,
  TitleName,
  Type,
  TypeContainer,
} from './style';

// eslint-disable-next-line react/prop-types
export function Description({ pokemon , close}) {
  const status = pokemon.stats;

  return (
    <MainContainer>
      <Close onClick={() =>close(null)}>x</Close>
      <Container>
        <NumName>
          <Number>#{pokemon.id}</Number>
          <TitleName>{pokemon.name}</TitleName>
        </NumName>
        <Image src={pokemon.sprites?.other['official-artwork'].front_default} />
        <TypeContainer>
          {pokemon.types.map((e, index) => (
            <Type key={index}>{e.type.name}</Type>
          ))}
        </TypeContainer>
      </Container>
      <Descriptions>
        <DescriptionsLi>
          <PStatus>
            {status[0]?.stat.name}: {status[0]?.base_stat}
          </PStatus>
          <StatusBar percentual={status[0]?.base_stat} />
        </DescriptionsLi>
        <DescriptionsLi>
          <PStatus>
            {status[1]?.stat.name}: {status[1]?.base_stat}
          </PStatus>
          <StatusBar percentual={status[1]?.base_stat} />
        </DescriptionsLi>
        <DescriptionsLi>
          <PStatus>
            {status[2]?.stat.name}: {status[2]?.base_stat}
          </PStatus>
          <StatusBar percentual={status[2]?.base_stat} />
        </DescriptionsLi>
        <DescriptionsLi>
          <PStatus>
            {status[3]?.stat.name}:{status[3]?.base_stat}
          </PStatus>
          <StatusBar percentual={status[3]?.base_stat} />
        </DescriptionsLi>
        <DescriptionsLi>
          <PStatus>
            {status[4]?.stat.name}: {status[4]?.base_stat}
          </PStatus>
          <StatusBar percentual={status[4]?.base_stat} />
        </DescriptionsLi>
        <DescriptionsLi>
          <PStatus>
            {status[5]?.stat.name}: {status[5]?.base_stat}
          </PStatus>
          <StatusBar percentual={status[5]?.base_stat} />
        </DescriptionsLi>
      </Descriptions>
    </MainContainer>
  );
}
