/**
 * @file: Enrollment
 * @info: App page to register a Enrollment
 */

// Dependencies import
import React from 'react';

// Components import
import Header from '../../components/Header';

// Styles import
import {
  Container,
  Content,
  TitlePage,
  RegisterContainer,
  RegisterFieldsContainer,
  RegisterDataContainer,
} from './styles';

const Enrollment: React.FC = () => {
  return (
    <>
      <Container>
        <Header />
        <Content>
          <TitlePage>
            <h1>Matrícula do Aluno</h1>
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

export default Enrollment;
