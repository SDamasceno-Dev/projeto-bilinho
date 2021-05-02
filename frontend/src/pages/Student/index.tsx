/**
 * @file: Student
 * @info: App page to register a Student
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
  itr: string;
  birthDate: Date;
  mobile: string;
  gender: string;
  paymentOpt: string;
}

// Validation schema
const schema = Yup.object().shape({
  studentName: Yup.string().required('Nome é obrigatório'),
  studentITR: Yup.string().required('CPF obrigatório.'),
  studentBirthDate: Yup.date().required('Data aniversário obrigatório'),
  studentMobile: Yup.string().required('Celular obrigatório'),
});

const Student: React.FC = () => {
  const [studentsList, setStudentsList] = useState([]);
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
  const getStudentList = useCallback(async () => {
    try {
      const response = await api.get('/students', { headers: authorization });
      console.log(response);

      if (response.status === 200) {
        setStudentsList(response.data);
      }
    } catch (err) {
      console.error(err.response);
    }
  }, []);

  // Register and Educational Institution
  const studentRegister = useCallback(
    async ({ name, itr, birthDate, mobile, gender, paymentOpt }) => {
      console.log(name, itr, birthDate, mobile, gender, paymentOpt);
      // try {
      //   const response = await api.post(
      //     '/students',
      //     {
      //       name,
      //       itr,
      //       birthDate,
      //       mobile,
      //       gender,
      //       paymentOpt,
      //     },
      //     { headers: authorization },
      //   );
      //   if (response.status === 200) {
      //     alert('Estudante cadastrada(o) com sucesso!');
      //   }
      //   getStudentList();
      // } catch (err) {
      //   if (err.response.status === 400) {
      //     alert(
      //       `Não foi possível cadastrar a(o) estudante, por favor verifique os dados.\nError: ${err.response.data.message}`,
      //     );
      //   }

      //   console.error(err.response);
      // }
    },
    [],
  );

  // Submit form
  const onSubmit = (data: Record<string, ''>) => {
    studentRegister({
      name: data.studentName,
      itr: data.studentITR,
      birthDate: data.studentBirthDate,
      mobile: data.studentMobile,
      gender: data.gender,
      paymentOpt: data.paymentOpt,
    });
  };

  useEffect(() => {
    getStudentList();
  }, []);

  useEffect(() => {
    console.log('studentsList', studentsList);
  }, [studentsList]);

  return (
    <>
      <Container>
        <Header />
        <Content>
          <TitlePage>
            <h1>Cadastro de Estudante</h1>
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
                    <span>Nome estudante</span>
                    <Input
                      {...register('studentName')}
                      icon={BsBuilding}
                      placeholder="Nome estudante"
                    />
                    <p>{errors.studentName?.message}</p>
                  </InputComponent>
                </FieldsRow>
                <FieldsRow>
                  <InputComponent>
                    <span>CPF</span>
                    <Input
                      {...register('studentITR')}
                      icon={AiOutlineNumber}
                      placeholder="CPF"
                      type="number"
                    />
                    <p>{errors.studentITR?.message}</p>
                  </InputComponent>
                  <InputComponent>
                    <span>Data de aniversário</span>
                    <Input
                      {...register('studentBirthDate')}
                      icon={AiOutlineNumber}
                      placeholder="Data aniversário"
                      type="number"
                    />
                    <p>{errors.studentBirthDate?.message}</p>
                  </InputComponent>
                  <InputComponent>
                    <span>Celular</span>
                    <Input
                      {...register('studentMobile')}
                      icon={AiOutlineNumber}
                      placeholder="Celular"
                      type="number"
                    />
                    <p>{errors.studentMobile?.message}</p>
                  </InputComponent>
                </FieldsRow>
                <FieldsRow>
                  <InputComponent>
                    <span>Sexo</span>
                    <select {...register('gender')}>
                      <option value="M">Masculino</option>
                      <option value="F">Feminino</option>
                    </select>
                    <p>{errors.password?.message}</p>
                  </InputComponent>
                  <InputComponent>
                    <span>Tipo de instituição</span>
                    <select {...register('paymentOpt')}>
                      <option value="BOLETO">Boleto</option>
                      <option value="CARTÃO">Cartão</option>
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
                <HeaderItem>Nome Estudante</HeaderItem>
                <HeaderItem>CPF</HeaderItem>
                <HeaderItem>Data de aniversário</HeaderItem>
                <HeaderItem>Celular</HeaderItem>
                <HeaderItem>Sexo</HeaderItem>
                <HeaderItem>Forma de Pagamento</HeaderItem>
              </ListItemsHeader>
              <ListItemsContent>
                {studentsList.map((item: ListData, i) => {
                  return (
                    <ListItem key={i.toString()}>
                      <ListItemElement>{item.name}</ListItemElement>
                      <ListItemElement>{item.itr}</ListItemElement>
                      <ListItemElement>{item.birthDate}</ListItemElement>
                      <ListItemElement>{item.mobile}</ListItemElement>
                      <ListItemElement>{item.gender}</ListItemElement>
                      <ListItemElement>{item.paymentOpt}</ListItemElement>
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

export default Student;
