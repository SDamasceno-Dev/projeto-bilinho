/**
 * @file: Header
 * @info: Header component of the App
 */

// Dependencies import
import React from 'react';

// Hooks import
import { useAuth } from '../../hooks/AuthContext';

// Assets import
import DefaultAvatar from '../../assets/Person.svg';

// Styles import
import { Container } from './styles';

const ProfilePicture: React.FC = () => {
  const { user } = useAuth();

  /**  FUNCTIONS  * */
  function handleClickProfile(): void {
    alert('Esta funcionalidade está em desenvolvimento ');
  }
  return (
    <Container onClick={handleClickProfile}>
      <img
        src={
          user.avatar === null
            ? DefaultAvatar
            : `http://localhost:3333/files/${user.avatar}`
        }
        alt={user.name}
      />
    </Container>
  );
};

export default ProfilePicture;
