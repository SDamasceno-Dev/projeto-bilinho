/**
 * @file: SignIn
 * @info: Component to login an user
 */

// Dependencies import
import React from 'react';
import { useForm } from 'react-hook-form';

// Components import
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';
import Input from '../../components/Input';
import Button from '../../components/Button';

// Assets import
import logoImg from '../../assets/logo.svg';

// Styles import
import { Container, Content } from './styles';

const SignIn: React.FC = () => {
  const { register, handleSubmit } = useForm();

  // Function definitions
  const onSubmit = (data: Record<string, ''>) => {
    console.log(data);
    // Validation Form
    if (data.email === undefined || data.email.trim() === '') {
      alert('Campo e-mail é obrigatório.');
      return;
    }

    if (
      !data.email.match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      )
    ) {
      alert('Por favor utilize um e-mail válido.');
      return;
    }

    if (data.password === undefined || data.password.trim() === '') {
      alert('Campo senha é obrigatório.');
    }
  };

  return (
    <Container>
      <Content>
        <img src={logoImg} alt="Bilinho" />
        <h1>Bilinho</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Input {...register('email')} icon={FiMail} placeholder="E-mail" />
          <Input
            {...register('password')}
            type="password"
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
};

export default SignIn;
