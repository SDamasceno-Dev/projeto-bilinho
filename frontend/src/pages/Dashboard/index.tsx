/**
 * @file: Dashboard
 * @info: App Dashboard page
 */

// Dependencies import
import React from 'react';
import { useHistory } from 'react-router-dom';

// Components import
import Header from '../../components/Header';

// Assets import
import MenuBtnImgEducInst from '../../assets/educ-inst.svg';
import MenuBtnImgStudent from '../../assets/student.svg';
import MenuBtnImgEnrollment from '../../assets/enrollment.svg';

// Styles import
import { Container, Content, MenuContainer, MenuButton } from './styles';

const Dashboard: React.FC = () => {
  const history = useHistory();
  return (
    <>
      <Container>
        <Header />
        <Content>
          <MenuContainer>
            <MenuButton onClick={() => history.push('/educinst')}>
              <img src={MenuBtnImgEducInst} alt="Instituição de Ensino" />
              <h5>Cadastro de Instituição</h5>
            </MenuButton>
            <MenuButton onClick={() => history.push('/student')}>
              <img src={MenuBtnImgStudent} alt="Instituição de Ensino" />
              <h5>Cadastro de Aluno</h5>
            </MenuButton>
            <MenuButton onClick={() => history.push('/enrollment')}>
              <img src={MenuBtnImgEnrollment} alt="Instituição de Ensino" />
              <h5>Matrícula de aluno</h5>
            </MenuButton>
          </MenuContainer>
        </Content>
      </Container>
    </>
  );
};

export default Dashboard;
