import styled, { css } from 'styled-components';

// Inteface definition
interface ContainerProps {
  isFocused?: boolean;
}

export const Container = styled.div<ContainerProps>`
  border-radius: 4px;
  width: 100%;
  padding: 5px;
  display: flex;
  align-items: center;

  border: 1px solid #999999;
  color: #ccc;

  & + div {
    margin-top: 8px;
  }

  ${props =>
    props.isFocused &&
    css`
      color: #5f4693;
      border-color: #5f4693;
    `}

  input {
    flex: 1;
    background: transparent;
    border: 0;
    color: #626262;
    font-weight: 600;
    font-size: 12px;

    &::placeholder {
      color: #ccc;
    }
  }

  svg {
    margin-right: 10px;
  }
`;
