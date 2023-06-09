import { useRef } from 'react';
import { InputGlobal } from '../GBInput/index';
import {
  BackgroundRegister,
  ButtonRegister,
  ContainerInput,
  LinkRegister,
  MainContainerRegister,
  Title,
} from './style';
import { useNavigate } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
export function RegisterComponent({ addUser }) {
  const username = useRef('');
  const fullName = useRef('');
  const email = useRef('');
  const password = useRef('');
  const navigate = useNavigate();

  function insertUser() {
    const user = {
      username: username.current.value,
      fullName: fullName.current.value,
      email: email.current.value,
      password: password.current.value,
      favorites: [],
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
        <LinkRegister onClick={() => navigate('/')}>login</LinkRegister>
      </MainContainerRegister>
    </BackgroundRegister>
  );
}
