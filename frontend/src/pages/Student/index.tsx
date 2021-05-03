/**
 * @file: Student
 * @info: App page to register a Student
 */

// Dependencies import
import React, { useCallback, useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { parse, format, formatISO, parseJSON } from 'date-fns';
import { maskBr, validateBr } from 'js-brasil';

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
  studentBirthDate: Yup.string().required('Data aniversário obrigatório'),
  studentMobile: Yup.string().required('Celular obrigatório'),
});

const Student: React.FC = () => {
  const [studentsList, setStudentsList] = useState<ListData[]>([]);
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
      // Validate ITR
      if (!validateBr.cpf(itr)) {
        alert('CPF inválido. Por favor inserir um cpf válido.');
        return;
      }

      // Validate birthDate
      if (
        !birthDate.match(
          /^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/,
        )
      ) {
        alert('Data inválida. Por favor, digite uma data válida.');
        return;
      }
      const bDate = formatISO(parse(birthDate, 'dd/MM/yyyy', new Date()));

      try {
        const response = await api.post(
          '/students',
          {
            name,
            itr,
            birthDate: bDate,
            mobile,
            gender,
            paymentOpt,
          },
          { headers: authorization },
        );
        if (response.status === 200) {
          alert('Estudante cadastrada(o) com sucesso!');
          reset();
        }
        getStudentList();
      } catch (err) {
        if (err.response.status === 400) {
          alert(
            `Não foi possível cadastrar a(o) estudante, por favor verifique os dados.\nError: ${err.response.data.message}`,
          );
        }

        console.error(err.response);
      }
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
          <BackButton />
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
                      {...register('studentITR', {
                        required: true,
                      })}
                      icon={AiOutlineNumber}
                      placeholder="Informe o CPF sem os pontos"
                      type="text"
                      maxLength={11}
                    />
                    <p>{errors.studentITR?.message}</p>
                  </InputComponent>
                  <InputComponent>
                    <span>Data de aniversário</span>
                    <Input
                      {...register('studentBirthDate')}
                      icon={AiOutlineNumber}
                      placeholder="Data aniversário dd/mm/aaaa"
                      maxLength={10}
                    />
                    <p>{errors.studentBirthDate?.message}</p>
                  </InputComponent>
                  <InputComponent>
                    <span>Celular</span>
                    <Input
                      {...register('studentMobile')}
                      icon={AiOutlineNumber}
                      placeholder="Celular"
                      type="text"
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
                      <ListItemElement>{maskBr.cpf(item.itr)}</ListItemElement>
                      <ListItemElement>
                        {format(parseJSON(item.birthDate), 'dd/MM/yyyy')}
                      </ListItemElement>
                      <ListItemElement>
                        {maskBr.celular(item.mobile)}
                      </ListItemElement>
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
