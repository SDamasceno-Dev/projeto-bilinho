/**
 * @file: Header
 * @info: Header component of the App
 */

// Dependencies import
import React from 'react';

// Assets import
import { ImExit } from 'react-icons/im';

// Hooks and utils import
import { useAuth } from '../../hooks/AuthContext';

// Components import
import ProfilePicture from '../ProfilePicture';

// Styles import
import {
  Container,
  UserInfoContainer,
  ProfileManagementContainer,
  AppExit,
} from './styles';

const Header: React.FC = () => {
  const { signOut } = useAuth();

  return (
    <Container>
      <UserInfoContainer>
        <p>
          <h5>Nome:</h5>
          <h6>Sandro de Oliveira Damasceno</h6>
        </p>
        <p>
          <h5>E-Mail:</h5>
          <h6>sandro.o.damasceno@gmail.com</h6>
        </p>
      </UserInfoContainer>
      <ProfileManagementContainer>
        <ProfilePicture />
        <AppExit onClick={signOut}>
          <ImExit size={40} color="#333" />
          <h5>Sair</h5>
        </AppExit>
      </ProfileManagementContainer>
    </Container>
  );
};

export default Header;
