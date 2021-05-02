/**
 * @file: Student
 * @info: App page to register a Student
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

const Student: React.FC = () => {
  return (
    <>
      <Container>
        <Header />
        <Content>
          <TitlePage>
            <h1>Cadastro de Estudante</h1>
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

export default Student;
