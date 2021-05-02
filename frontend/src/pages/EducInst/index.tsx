/**
 * @file: EducInst
 * @info: App page to register an Educational Institute
 */

// Dependencies import
import React from 'react';

// Components import
import Header from '../../components/Header';
import BackButton from '../../components/ButtonBack';

// Styles import
import {
  Container,
  Content,
  TitlePage,
  RegisterContainer,
  RegisterFieldsContainer,
  RegisterDataContainer,
} from './styles';

const EducInst: React.FC = () => {
  return (
    <>
      <Container>
        <Header />
        <Content>
          <BackButton />
          <TitlePage>
            <h1>Cadastro de Instituição de Ensino</h1>
          </TitlePage>
          <RegisterContainer>
            <RegisterFieldsContainer />
            <RegisterDataContainer />
          </RegisterContainer>
        </Content>
      </Container>
    </>
  );
};

export default EducInst;
