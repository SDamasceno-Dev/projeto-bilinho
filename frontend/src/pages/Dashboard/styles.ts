import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  height: 100vh;
  margin: 0;
  flex-direction: column;
`;

export const Content = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const MenuContainer = styled.div`
  width: 90%;
  height: 60%;
  background-color: transparent;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

export const MenuButton = styled.button`
  width: 150px;
  height: 150px;
  background-color: transparent;
  border: 0;

  img {
    width: 100%;
    height: 100%;
  }

  h5 {
    text-align: center;
    font-size: 12px;
    font-weight: 600;
  }
`;
