/**
 * @file: SignIn
 * @info: Main Component of App
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
  const onSubmit = (data: Record<string, unknown>) => {
    console.log('form data', data);
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
