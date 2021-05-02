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
  align-items: center;
  flex-direction: column;
`;

export const FieldsRow = styled.div`
  display: flex;
  width: auto;
  height: auto;
  margin: 5px;
`;

export const InputComponent = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  padding: 0px 10px;

  span {
    font-weight: 500;
    font-size: 12px;
    color: #333;
    margin: 10px 0 0 10px;
  }
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

// List Container
export const RegisterContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: space-evenly;
  width: 80%;
  align-self: auto;
`;

export const RegisterFieldsContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  border: 1px solid #ddd;
  border-radius: 20px;

  & + div {
    margin-top: 10px;
  }
`;

export const ListItemsContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 2;
  border: 1px solid #ddd;
  border-radius: 20px;
  margin-bottom: 10px;
  max-height: 420px;
`;

export const ListContentTitle = styled.div`
  display: flex;
  flex: 1;
  height: 30px;
  min-height: 30px;
  max-height: 30px;
  background-color: #ddd;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
`;

export const ListItemsHeader = styled.div`
  display: flex;
  flex: 1;
  max-height: 25px;
  align-items: center;
  background-color: #eee;
  border: 0;
`;

export const HeaderItem = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  font-size: 12px;
  font-weight: 500;
  color: #555;
  padding-left: 5px;

  & + div {
    border-left: 0.5px solid #ddd;
  }
`;

export const ListItemsContent = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  min-height: 300px;
`;

export const ListItem = styled.div`
  display: flex;
  max-height: 25px;

  &:hover {
    background-color: #eee;
    cursor: pointer;
  }
`;

export const ListItemElement = styled.div`
  display: flex;
  flex: 1;
  width: 100%;
  max-height: 25px;
  padding-left: 5px;

  & + div {
    border-left: 0.5px solid #aaa;
  }
`;

export const ListItemsFooter = styled.div`
  display: flex;
  flex: 1;
  height: 30px;
  min-height: 30px;
  max-height: 30px;
  background-color: #ccc;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  flex: 1;
  width: 50%;
  height: 50px;
  align-self: center;
  justify-content: space-evenly;
  align-items: center;
  margin: 20px;
`;
