/**
 * @file: EducInst
 * @info: App page to register an Educational Institute
 */

// Dependencies import
import React, { useCallback, useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

// Assets import
import { BsBuilding } from 'react-icons/bs';
import { AiOutlineNumber } from 'react-icons/ai';

// Components import
import Header from '../../components/Header';
import BackButton from '../../components/ButtonBack';
import Input from '../../components/Input';
import Button from '../../components/Button';

// Hooks import
import { useAuth } from '../../hooks/AuthContext';

// Import services
import api from '../../services/api';

// Styles import
import {
  Container,
  Content,
  FieldsRow,
  InputComponent,
  TitlePage,
  ListItemsContainer,
  ListContentTitle,
  ListItemsHeader,
  HeaderItem,
  ListItemsContent,
  ListItem,
  ListItemElement,
  ListItemsFooter,
  RegisterContainer,
  RegisterFieldsContainer,
  ButtonsContainer,
} from './styles';

// Interface definition
interface ListData {
  name: string;
  ein: string;
  type: string;
}

// Validation schema
const schema = Yup.object().shape({
  educInstName: Yup.string().required('Nome é obrigatório'),
  educInstEIN: Yup.string().required('CNPJ obrigatório.'),
});

const EducInst: React.FC = () => {
  const [educInstsList, setEducInstsList] = useState([]);
  const { token } = useAuth();
  const authorization = { Authorization: `Bearer ${token}` };

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  /**  FUNCTIONS  * */

  // Get all Educationa Institutions
  const getEducInstList = useCallback(async () => {
    try {
      const response = await api.get('/educinsts', { headers: authorization });

      if (response.status === 200) {
        setEducInstsList(response.data);
      }
    } catch (err) {
      console.error(err.response);
    }
  }, []);

  // Register and Educational Institution
  const educInstRegister = useCallback(async ({ name, ein, type }) => {
    try {
      const response = await api.post(
        '/educinsts',
        {
          name,
          ein,
          type,
        },
        { headers: authorization },
      );
      if (response.status === 200) {
        alert('Instituição cadastrada com sucesso!');
      }
      getEducInstList();
    } catch (err) {
      if (err.response.status === 400) {
        alert(
          `Não foi possível cadastrar a instituição, por favor verifique os dados.\nError: ${err.response.data.message}`,
        );
      }

      console.error(err.response);
    }
  }, []);

  // Submit form
  const onSubmit = (data: Record<string, ''>) => {
    educInstRegister({
      name: data.educInstName,
      ein: data.educInstEIN,
      type: data.educInstType,
    });
  };

  useEffect(() => {
    getEducInstList();
  }, []);

  return (
    <>
      <Container>
        <Header />
        <Content>
          <BackButton />
          <TitlePage>
            <h1>Cadastro de Instituição de Ensino</h1>
          </TitlePage>
          <RegisterContainer>
            <RegisterFieldsContainer>
              <form
                onSubmit={handleSubmit(onSubmit)}
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  flexDirection: 'column',
                }}
              >
                <FieldsRow>
                  <InputComponent>
                    <span>Nome da instituição</span>
                    <Input
                      {...register('educInstName')}
                      icon={BsBuilding}
                      placeholder="Nome da instituição"
                    />
                    <p>{errors.educInstName?.message}</p>
                  </InputComponent>
                </FieldsRow>
                <FieldsRow>
                  <InputComponent>
                    <span>CNPJ</span>
                    <Input
                      {...register('educInstEIN')}
                      icon={AiOutlineNumber}
                      placeholder="CNPJ"
                    />
                    <p>{errors.educInstEIN?.message}</p>
                  </InputComponent>
                  <InputComponent>
                    <span>Tipo de instituição</span>
                    <select {...register('educInstType')}>
                      <option value="UNIVERSIDADE">Universidade</option>
                      <option value="ESCOLA">Escola</option>
                      <option value="CRECHE">Creche</option>
                    </select>
                    <p>{errors.password?.message}</p>
                  </InputComponent>
                </FieldsRow>
                <ButtonsContainer>
                  <Button type="submit">Salvar</Button>
                  <Button
                    type="button"
                    onClick={reset}
                    style={{ backgroundColor: '#4FCDDA' }}
                  >
                    Limpar
                  </Button>
                </ButtonsContainer>
              </form>
            </RegisterFieldsContainer>
            <ListItemsContainer>
              <ListContentTitle />
              <ListItemsHeader>
                <HeaderItem>Nome da Instituição</HeaderItem>
                <HeaderItem>CNPJ</HeaderItem>
                <HeaderItem>Tipo</HeaderItem>
              </ListItemsHeader>
              <ListItemsContent>
                {educInstsList.map((item: ListData, i) => {
                  return (
                    <ListItem key={i.toString()}>
                      <ListItemElement>{item.name}</ListItemElement>
                      <ListItemElement>{item.ein}</ListItemElement>
                      <ListItemElement>{item.type}</ListItemElement>
                    </ListItem>
                  );
                })}
              </ListItemsContent>
              <ListItemsFooter />
            </ListItemsContainer>
          </RegisterContainer>
        </Content>
      </Container>
    </>
  );
};

export default EducInst;
