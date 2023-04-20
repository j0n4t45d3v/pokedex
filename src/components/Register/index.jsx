import { useRef } from 'react';
import { InputGlobal } from '../GBInput/index';
import {
  BackgroundRegister,
  ButtonRegister,
  ContainerInput,
  MainContainerRegister,
  Title,
} from './style';

export function RegisterComponent() {
  const username = useRef("")
  const fullName = useRef("")
  const email = useRef("")
  const password = useRef("")

  return (
    <BackgroundRegister>
      <MainContainerRegister>
        <Title>Cadastro</Title>
        <ContainerInput>
          <InputGlobal refProps={fullName} typeProps='text' placeholderProps="Nome completo" />
          <InputGlobal refProps={username} typeProps='text' placeholderProps="Username" />
          <InputGlobal refProps={email} typeProps='e-mail' placeholderProps="Email" />
          <InputGlobal refProps={password} typeProps='password' placeholderProps="Senha" />
        </ContainerInput>
        <ButtonRegister>Cadastrar</ButtonRegister>
      </MainContainerRegister>
    </BackgroundRegister>
  );
}
