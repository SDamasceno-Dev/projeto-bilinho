/**
 * @file: Header
 * @info: Header component of the App
 */

// Dependencies import
import React from 'react';

// Assets import
import { FaPowerOff } from 'react-icons/fa';
import Logo from '../../assets/logo.svg';

// Hooks and utils import
import { useAuth } from '../../hooks/AuthContext';

// Components import
import ProfilePicture from '../ProfilePicture';

// Styles import
import {
  Container,
  HeaderLeft,
  UserInfoContainer,
  ProfileManagementContainer,
  AppExit,
} from './styles';

const Header: React.FC = () => {
  const { signOut, user } = useAuth();

  console.log(user);

  return (
    <Container>
      <HeaderLeft>
        <img src={Logo} alt="Bilinho" />
        <UserInfoContainer>
          <div>
            <span>Nome:</span>
            <strong>{user.name}</strong>
          </div>
          <div>
            <span>E-Mail:</span>
            <strong>{user.email}</strong>
          </div>
        </UserInfoContainer>
      </HeaderLeft>
      <ProfileManagementContainer>
        <ProfilePicture />
        <AppExit onClick={signOut}>
          <FaPowerOff size={20} color="#333" />
          <h5>Turn Off</h5>
        </AppExit>
      </ProfileManagementContainer>
    </Container>
  );
};

export default Header;
