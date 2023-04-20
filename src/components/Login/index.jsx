import { useRef } from 'react';
import { InputGlobal } from '../GBInput/index';
import {
  BackgroundLogin,
  ButtonLogin,
  ContainerButton,
  ContainerInput,
  LinkRegister,
  MainContainerLogin,
  Title,
} from './style';
import { useNavigate } from 'react-router-dom';

export function LoginComponent() {
  const email = useRef('');
  const password = useRef('');
  const navigate = useNavigate()

  function handleClick() {
    navigate("/home-page")
  }

  return (
    <BackgroundLogin>
      <MainContainerLogin>
        <Title>Login</Title>
        <ContainerInput>
          <InputGlobal
            refProps={email}
            placeholderProps={'Email'}
            typeProps={'e-mail'}
          />
          <InputGlobal
            refProps={password}
            placeholderProps={'Senha'}
            typeProps={'password'}
          />
        </ContainerInput>

        <ContainerButton>
          <ButtonLogin onClick={handleClick}>Logar</ButtonLogin>
          <LinkRegister onClick={() => navigate("/register")}>cadastrar</LinkRegister>
        </ContainerButton>
      </MainContainerLogin>
    </BackgroundLogin>
  );
}
