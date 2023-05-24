import styled, { keyframes } from 'styled-components';

const changrScaleA = keyframes`
  0%, 100%{
    transform: scale(.5);
    left: 0;
    z-index: 0;
  }
  25%{
    left: 100px;
  }
  50%{
    transform: scale(2);
    z-index: 1;
  }
  75%{
    left: -100px;
  }
`;

const changrScaleB = keyframes`
  0%, 100%{
    transform: scale(.5);
    z-index: 0;
    left: 0;
  }
  25%{
    left: 100px;
  }
  50%{
    transform: scale(2);
    z-index: 1;
  }
  75%{
    left: -100px;
  }
`;



export const ContainerLoading = styled.div`
  height: 100vh;
  width: 100%;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100000;
  position: fixed;
`;

export const PokeballLoading = styled.img`
  position: relative;
  background-color: white;
  border-radius: 50%;
  width: 50px;
  animation: ${changrScaleA} 2s infinite ease-in-out;
  animation-delay: .1s;
`;

export const UserLoading = styled.img`
  position: relative;
  width: 50px;
  animation: ${changrScaleB} 2s infinite ease-in-out;
  animation-delay: .9s;
`;
