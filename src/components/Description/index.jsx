import { Container, Descriptions, DescriptionsLi, MainContainer, PStatus, StatusBar, TitleName, Type } from './style';

// eslint-disable-next-line react/prop-types
export function Description({ pokemon }) {
  const status = pokemon.stats;

  return (
    <MainContainer>
      <Container>
        <TitleName>{pokemon.name}</TitleName>
        {pokemon.types.map((e, index) => (
          <Type key={index}>{e.type.name}</Type>
        ))}
        <img src={pokemon.sprites?.other['official-artwork'].front_default} />
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
