/* eslint-disable camelcase */
/**
 * @file: Enrollment
 * @info: App page to register a Enrollment
 */

// Dependencies import
import React, { useState, useEffect, useCallback } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

// Assets import
import { MdAttachMoney, MdDateRange } from 'react-icons/md';
import { GoBook } from 'react-icons/go';
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
  TitlePage,
  FieldsRow,
  InputComponent,
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
interface EducInstData {
  name: string;
  id: string;
}

interface StudentData {
  name: string;
  id: string;
}

// Validation schema
const schema = Yup.object().shape({
  eduinst_id: Yup.string().required('Escolha uma instituição.'),
  student_id: Yup.string().required('Escolha um aluno.'),
  courseName: Yup.string().required('Informe o nome do curso.'),
  courseValue: Yup.string().required('Informe o valor do curso.'),
  invoicesQtt: Yup.string().required('Informe a quantidade de parcelas.'),
  bestDueDay: Yup.string().required('Informe a data de vencimento.'),
});

const Enrollment: React.FC = () => {
  const [studentsList, setStudentsList] = useState<EducInstData[]>([]);
  const [educInstsList, setEducInstsList] = useState<StudentData[]>([]);

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

  // Get All Educational Institutions
  const getAllEducInsts = useCallback(async () => {
    try {
      const response = await api.get('/educinsts', { headers: authorization });
      if (response.status === 200) {
        setEducInstsList(response.data);
      }
    } catch (err) {
      console.error(err.response);
    }
  }, []);

  // Get All Educational Institutions
  const getAllStudents = useCallback(async () => {
    try {
      const response = await api.get('/students', { headers: authorization });
      if (response.status === 200) {
        setStudentsList(response.data);
      }
    } catch (err) {
      console.error(err.response);
    }
  }, []);

  // Create all invoices
  const invoicesCreate = useCallback(
    async ({ enrollmentValue, numberInvoices, dueDay, enrollment_id }) => {
      try {
        const response = await api.post(
          '/invoices',
          { enrollmentValue, numberInvoices, dueDay, enrollment_id },
          { headers: authorization },
        );
        if (response.status === 200) {
          alert('Matrícula realizada com sucesso!');
        }
      } catch (err) {
        console.error(err.response);
      }
    },
    [],
  );

  // Register enrollment and invoices
  const enrollmentRegister = useCallback(
    async ({
      totalValue,
      numberInvoices,
      dueDayInvoices,
      courseName,
      educinst_id,
      student_id,
    }) => {
      try {
        const response = await api.post(
          '/enrollments',
          {
            totalValue,
            numberInvoices,
            dueDayInvoices,
            courseName,
            educinst_id,
            student_id,
          },
          { headers: authorization },
        );
        if (response.status === 200) {
          invoicesCreate({
            enrollmentValue: totalValue,
            numberInvoices,
            dueDay: dueDayInvoices,
            enrollment_id: response.data.id,
          });
        }
      } catch (err) {
        if (err.response.status === 400) {
          alert(
            `Não foi possível fazer a matrícula do estudante, por favor verifique os dados.\nError: ${err.response.data.message}`,
          );
        }

        console.error(err.response);
      }
    },
    [],
  );

  // Submit form
  const onSubmit = (data: Record<string, ''>) => {
    enrollmentRegister({
      totalValue: data.courseValue,
      numberInvoices: data.invoicesQtt,
      dueDayInvoices: data.bestDueDay,
      courseName: data.courseName,
      educinst_id: data.eduinst_id,
      student_id: data.student_id,
    });
  };

  useEffect(() => {
    getAllEducInsts();
    getAllStudents();
  }, []);

  return (
    <>
      <Container>
        <Header />
        <Content>
          <BackButton />
          <TitlePage>
            <h1>Matrícula do Aluno</h1>
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
                    <span>Instituição de ensino</span>
                    <select {...register('eduinst_id')}>
                      <option value="">Escolha uma instituição</option>
                      {educInstsList.map((item: EducInstData, index) => {
                        return (
                          <option key={index.toString()} value={item.id}>
                            {item.name}
                          </option>
                        );
                      })}
                    </select>
                    <p>{errors.eduinst_id?.message}</p>
                  </InputComponent>
                  <InputComponent>
                    <span>Aluno</span>
                    <select {...register('student_id')}>
                      <option value="">Escolha um estudante</option>
                      {studentsList.map((item: StudentData, index) => {
                        return (
                          <option key={index.toString()} value={item.id}>
                            {item.name}
                          </option>
                        );
                      })}
                    </select>
                    <p>{errors.student_id?.message}</p>
                  </InputComponent>
                </FieldsRow>
                <FieldsRow>
                  <InputComponent>
                    <span>Nome do curso</span>
                    <Input
                      {...register('courseName')}
                      icon={GoBook}
                      placeholder="Nome do curso"
                    />
                    <p>{errors.courseName?.message}</p>
                  </InputComponent>
                </FieldsRow>
                <FieldsRow>
                  <InputComponent>
                    <span>Valor total</span>
                    <Input
                      {...register('courseValue', {
                        required: true,
                      })}
                      icon={MdAttachMoney}
                      placeholder="Informe o valor do curso"
                      type="text"
                    />
                    <p>{errors.courseValue?.message}</p>
                  </InputComponent>
                  <InputComponent>
                    <span>Quantidade de parcelas</span>
                    <Input
                      {...register('invoicesQtt')}
                      icon={AiOutlineNumber}
                      placeholder="Informe a quantidade de parcelas"
                      maxLength={2}
                    />
                    <p>{errors.invoicesQtt?.message}</p>
                  </InputComponent>
                  <InputComponent>
                    <span>Dia de pagamento</span>
                    <Input
                      {...register('bestDueDay')}
                      icon={MdDateRange}
                      placeholder="Melhor dia de pagamento"
                      type="text"
                      maxLength={2}
                    />
                    <p>{errors.bestDueDay?.message}</p>
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
            <ListItemsContainer />
          </RegisterContainer>
        </Content>
      </Container>
    </>
  );
};

export default Enrollment;
