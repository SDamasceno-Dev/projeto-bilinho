import styled from 'styled-components';

export const Container = styled.div`
  border-radius: 4px;
  border: 1px solid #999999;
  width: 100%;
  padding: 5px;
  display: flex;
  align-items: center;
  color: #ccc;

  & + div {
    margin-top: 8px;
  }

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
