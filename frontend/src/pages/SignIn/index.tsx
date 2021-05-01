/**
 * @file: SignIn
 * @info: Main Component of App
 */

// Dependencies import
import React from 'react';

// Assets import
import { FiLogIn } from 'react-icons/fi';
import logoImg from '../../assets/logo.svg';

// Styles import
import { Container, Content } from './styles';

const SignIn: React.FC = () => (
  <Container>
    <Content>
      <img src={logoImg} alt="Bilinho" />
      <h1>Bilinho</h1>
      <form>
        <input placeholder="E-mail" />
        <input type="password" placeholder="Senha" />
        <button type="submit">Entrar</button>
      </form>

      <a href="Login">
        <FiLogIn />
        Cadastrar aqui
      </a>
    </Content>
  </Container>
);

export default SignIn;
