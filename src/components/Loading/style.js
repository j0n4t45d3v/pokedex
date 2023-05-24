import styled, { keyframes } from 'styled-components';

const changrScaleA = keyframes`
  0%, 100%{
    transform: scale(1);
    left: 0;
    z-index: 1;
  }
  25%{
    left: 100px;
  }
  50%{
    transform: scale(.5);
    z-index: 0;
  }
  75%{
    left: -100px;
  }
`;

const changrScaleB = keyframes`
  0%, 100%{
    transform: scale(.5);
    z-index: 0;
    right: 0;
  }
  25%{
    right: 100px;
  }
  50%{
    transform: scale(2);
    z-index: 1;
  }
  75%{
    right: -100px;
  }
`;



export const ContainerLoading = styled.div`
  height: 100vh;
  width: 100%;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
`;

export const PokeballLoading = styled.img`
  position: absolute;
  left: 0;
  right: 0;
  margin: auto;
  background-color: white;
  border-radius: 50%;
  width: 50px;
  animation: ${changrScaleA} 2s infinite ease-in-out;

`;

export const UserLoading = styled.img`
  position: absolute;
  left: 0;
  right: 0;
  margin: auto;
  width: 50px;
  animation: ${changrScaleB} 2s infinite ease-in-out;
`;
