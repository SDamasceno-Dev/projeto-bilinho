import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  height: 100vh;
  margin: 0;
  flex-direction: column;
`;

export const Content = styled.div`
  position: relative;
  flex: 1;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const TitlePage = styled.div`
  width: 40%;
  align-items: center;
  justify-content: center;
  margin: 10px;

  h1 {
    color: #5f4693;
    text-align: center;
  }
`;

export const RegisterContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  width: 80%;
  align-self: auto;
`;

export const RegisterFieldsContainer = styled.div`
  display: flex;
  flex: 1;
  border: 1px solid #ddd;
  border-radius: 20px;

  & + div {
    margin-top: 10px;
  }
`;

export const RegisterDataContainer = styled.div`
  display: flex;
  flex: 2;
  border: 1px solid #ddd;
  border-radius: 20px;
  margin-bottom: 10px;
`;
