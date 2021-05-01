/**
 * @file: SignIn
 * @info: Component to login an user
 */

// Dependencies import
import React, { useCallback } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

// Assets import
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';
import logoImg from '../../assets/logo.svg';

// Components import
import Input from '../../components/Input';
import Button from '../../components/Button';

// Util and context import
import { useAuth } from '../../hooks/AuthContext';

// Styles import
import { Container, Content } from './styles';

// Validation schema
const schema = Yup.object().shape({
  email: Yup.string()
    .required('E-mail obrigatório.')
    .email('Digite um e-mail válido'),
  password: Yup.string().required('Senha obrigatória.'),
});

// Interface definition
interface SignInFormData {
  email: string;
  password: string;
}

const SignIn: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const { signIn } = useAuth();

  // Function definitions
  const onSubmit = (data: Record<string, ''>) => {
    signIn({ email: data.email, password: data.password });
  };

  return (
    <Container>
      <Content>
        <img src={logoImg} alt="Bilinho" />
        <h1>Bilinho</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Input {...register('email')} icon={FiMail} placeholder="E-mail" />
          <p>{errors.email?.message}</p>
          <Input
            {...register('password')}
            type="password"
            icon={FiLock}
            placeholder="Senha"
          />
          <p>{errors.password?.message}</p>
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
