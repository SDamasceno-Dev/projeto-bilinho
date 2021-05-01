import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.button`
  width: 100%;
  height: 35px;
  margin-top: 10px;
  padding: 0 10px;
  border-radius: 8px;
  background: #5f4693;
  border: 0;
  color: #fff;
  font-weight: 700;
  transition: background-color 0.3s;

  &:hover {
    background: ${shade(0.2, '#5f4693')};
  }
`;
