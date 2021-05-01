/**
 * @file: SignIn
 * @info: Main Component of App
 */

// Dependencies import
import React from 'react';

// Components import
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';
import Input from '../../components/Input';
import Button from '../../components/Button';

// Assets import
import logoImg from '../../assets/logo.svg';

// Styles import
import { Container, Content } from './styles';

const SignIn: React.FC = () => (
  <Container>
    <Content>
      <img src={logoImg} alt="Bilinho" />
      <h1>Bilinho</h1>
      <form>
        <Input name="email" icon={FiMail} placeholder="E-mail" />
        <Input
          type="password"
          name="password"
          icon={FiLock}
          placeholder="Senha"
        />
        <Button type="submit">Entrar</Button>
      </form>

      <a href="Login">
        <FiLogIn />
        Cadastrar aqui
      </a>
    </Content>
  </Container>
);

export default SignIn;
