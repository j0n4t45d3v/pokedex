import styled from 'styled-components';

export const ContainerFavorite = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;
  padding: 20px;
  align-items: center;
`;

export const HeaderFavorite = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Text = styled.h1`
  font-size: 30px;
`;

export const Image = styled.img`
  width: 600px;
  opacity: 0.2;
  rotate: -45deg;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
`;

export const Button = styled.button`
  rotate: 90deg;
  background-color: transparent;
  padding: 10px;
  font-size: 30px;
  font-weight: 700;
  outline: none;
  transition: 0.4s;
  :hover {
    transform: scale(1.1);
  }
`;

export const ContainerCardsFavorites = styled.div`
  margin-top: 100px;
  padding: 40px;
  position: absolute;
  display: flex;
  float: left;
  justify-content: start;
  flex-wrap: wrap;
  gap: 20px;
`;
