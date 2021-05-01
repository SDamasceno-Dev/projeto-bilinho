/**
 * @file: SignIn
 * @info: Main Component of App
 */

// Dependencies import
import React from 'react';

// Components import
import { FiUser, FiMail, FiLock } from 'react-icons/fi';
import Input from '../../components/Input';
import Button from '../../components/Button';

// Styles import
import { Container, Content } from './styles';

const SignUp: React.FC = () => {
  return (
    <Container>
      <Content>
        <h1>Cadastro</h1>
        <form>
          <Input name="name" icon={FiUser} placeholder="Nome" />
          <Input name="email" icon={FiMail} placeholder="E-mail" />
          <Input
            type="password"
            name="password"
            icon={FiLock}
            placeholder="Senha"
          />
          <div>
            <Button type="submit">Entrar</Button>
            <Button type="submit" style={{ backgroundColor: '#4FCDDA' }}>
              Voltar
            </Button>
          </div>
        </form>
      </Content>
    </Container>
  );
};

export default SignUp;
