/**
 * @file: SignUp
 * @info: Component of register an user
 */

// Dependencies import
import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

// Components import
import { FiUser, FiMail, FiLock } from 'react-icons/fi';
import Input from '../../components/Input';
import Button from '../../components/Button';

// Styles import
import { Container, Content } from './styles';

// Validation schema
const schema = Yup.object().shape({
  name: Yup.string().required('Nome obrigatório.'),
  email: Yup.string()
    .required('E-mail obrigatório.')
    .email('Digite um e-mail válido'),
  password: Yup.string()
    .required('Senha obrigatória.')
    .min(6, 'No mínimo 6 dígitos'),
});

const SignUp: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  // Function definitions
  const onSubmit = (data: Record<string, ''>) => {
    console.log(data);
  };
  return (
    <Container>
      <Content>
        <h1>Cadastro</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Input {...register('name')} icon={FiUser} placeholder="Nome" />
          <p>{errors.name?.message}</p>
          <Input {...register('email')} icon={FiMail} placeholder="E-mail" />
          <p>{errors.email?.message}</p>
          <Input
            {...register('password')}
            type="password"
            icon={FiLock}
            placeholder="Senha"
          />
          <p>{errors.password?.message}</p>
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
