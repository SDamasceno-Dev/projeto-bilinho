import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  height: 100px;
  background-color: transparent;
  justify-content: space-between;
  border-bottom: 0.5px solid #eee;
`;

export const HeaderLeft = styled.div`
  height: 80px;
  flex: 1;
  display: flex;
  align-items: center;

  img {
    height: 100%;
    margin-right: 10px;
  }
`;

export const UserInfoContainer = styled.div`
  max-width: 30%;
  height: 80px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  div {
    display: flex;
    flex-direction: row;
    margin: 3px;

    span {
      color: #5f4693;
      font-size: 12px;
    }

    strong {
      color: #333;
      font-size: 12px;
      margin-left: 5px;
      font-weight: 500;
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

  svg {
    color: #5f4693;
    transition: color 0.3s;

    &:hover {
      color: ${shade(0.5, '#5f4693')};
    }
  }
`;
