import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  height: 100px;
  background-color: transparent;
  justify-content: space-between;
  border-bottom: 0.5px solid #eee;
`;

export const UserInfoContainer = styled.div`
  min-width: 30%;
  height: 75px;
  margin: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  p {
    display: flex;
    flex-direction: row;
    margin: 3px;

    h5 {
      color: #5f4693;
      font-size: 12px;
    }

    h6 {
      color: #333;
      font-size: 12px;
      margin-left: 5px;
    }
  }
`;

export const ProfileManagementContainer = styled.div`
  width: 12%;
  height: 75px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px;
`;

export const AppExit = styled.button`
  height: 75px;
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  border: 0;
  background-color: transparent;
`;
