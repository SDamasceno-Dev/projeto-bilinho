import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  height: 100vh;
  display: flex;
`;

export const Content = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;

  img {
    width: 16%;
    margin-bottom: 10px;
  }

  h1 {
    font-size: 51px;
    text-align: center;
    color: #5f4693;
    font-weight: 500;
    margin-top: 2%;
  }

  form {
    position: absolute;
    top: 35%;
    display: flex;
    flex-direction: column;
    width: 23.9%;
    align-items: center;

    div {
      display: flex;
      flex-direction: row;
      width: 100%;
    }
  }

  a {
    display: block;
    font-weight: 600;
    color: #5f4693;
    margin-top: 10px;
    text-decoration: none;
    display: flex;
    align-items: center;
    transition: color 0.3s;

    svg {
      margin-right: 5px;
    }

    &:hover {
      color: ${shade(0.2, '#5f4693')};
    }
  }
`;
