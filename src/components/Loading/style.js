import styled, { keyframes } from 'styled-components';

const spin = keyframes`
  0% { 
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
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

export const IconLoading = styled.img`
  width: 50px;
  animation: ${spin} 2s infinite linear;
`;
