/**
 * @file: ButtonBack
 * @info: Component Button Back
 */

// Dependencies import
import React from 'react';
import { useHistory } from 'react-router-dom';

// Assets import
import { CgArrowLeftO } from 'react-icons/cg';

// Styles import
import { BackButtonContainer } from './styles';

const ButtonBack: React.FC = () => {
  const history = useHistory();

  return (
    <>
      <BackButtonContainer onClick={() => history.goBack()}>
        <CgArrowLeftO size={40} color="#5f4693" />
        <h5>voltar</h5>
      </BackButtonContainer>
    </>
  );
};

export default ButtonBack;
