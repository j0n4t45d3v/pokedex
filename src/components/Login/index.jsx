import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
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

// eslint-disable-next-line react/prop-types
export function LoginComponent({ acess }) {
  const email = useRef('');
  const password = useRef('');
  const navigate = useNavigate();

  function handleClick() {
    const user = acess(email.current.value, password.current.value);
    if (user !== null) {
      navigate('/home-page');
    }
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
          <LinkRegister onClick={() => navigate('/register')}>
            cadastrar
          </LinkRegister>
        </ContainerButton>
      </MainContainerLogin>
    </BackgroundLogin>
  );
}
