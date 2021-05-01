/**
 * @file: SignUp
 * @info: Component of register an user
 */

// Dependencies import
import React from 'react';
import { useForm } from 'react-hook-form';

// Components import
import { FiUser, FiMail, FiLock } from 'react-icons/fi';
import Input from '../../components/Input';
import Button from '../../components/Button';

// Styles import
import { Container, Content } from './styles';

const SignUp: React.FC = () => {
  const { register, handleSubmit } = useForm();

  // Function definitions
  const onSubmit = (data: Record<string, ''>) => {
    console.log(data);
    // Validation Form
    if (data.name === undefined || data.name.trim() === '') {
      alert('Nome é obrigatório.');
      return;
    }

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
      return;
    }

    if (data.password.length < 6) {
      alert('Campo senha deve ter no mínimo 6 dígitos.');
    }
  };
  return (
    <Container>
      <Content>
        <h1>Cadastro</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Input {...register('name')} icon={FiUser} placeholder="Nome" />
          <Input {...register('email')} icon={FiMail} placeholder="E-mail" />
          <Input
            {...register('password')}
            type="password"
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
