import { useRef } from 'react';
import { InputGlobal } from '../GBInput/index';
import {
  BackgroundRegister,
  ButtonRegister,
  ContainerInput,
  MainContainerRegister,
  Title,
} from './style';

// eslint-disable-next-line react/prop-types
export function RegisterComponent({ addUser }) {
  const username = useRef('');
  const fullName = useRef('');
  const email = useRef('');
  const password = useRef('');

  function insertUser() {
    const user = {
      username: username.current.value,
      fullName: fullName.current.value,
      email: email.current.value,
      password: password.current.value,
    };
    addUser(user);
  }

  return (
    <BackgroundRegister>
      <MainContainerRegister>
        <Title>Cadastro</Title>
        <ContainerInput>
          <InputGlobal
            refProps={fullName}
            typeProps="text"
            placeholderProps="Nome completo"
          />
          <InputGlobal
            refProps={username}
            typeProps="text"
            placeholderProps="Username"
          />
          <InputGlobal
            refProps={email}
            typeProps="e-mail"
            placeholderProps="Email"
          />
          <InputGlobal
            refProps={password}
            typeProps="password"
            placeholderProps="Senha"
          />
        </ContainerInput>
        <ButtonRegister onClick={insertUser}>Cadastrar</ButtonRegister>
      </MainContainerRegister>
    </BackgroundRegister>
  );
}
