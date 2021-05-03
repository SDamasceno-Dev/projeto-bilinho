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
import Modal from 'react-modal';
import { format, parseJSON } from 'date-fns';

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

interface EnrollmentData {
  id: string;
  totalValue: string;
  numberInvoices: string;
  dueDayInvoices: string;
  courseName: string;
  educinst_id: string;
  student_id: string;
}

interface InvoiceData {
  invoiceValue: string;
  dueDate: Date;
  enrollment_id: string;
  status: string;
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
  const [enrollmentsList, setEnrollmentsList] = useState<EnrollmentData[]>([]);
  const [invoicesList, setInvoicesList] = useState<InvoiceData[]>([]);
  const [showModal, setShowModal] = useState(false);
  const [modalData, setModalData] = useState({});

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

  // Get all Enrollments
  const getEnrollments = useCallback(async () => {
    try {
      const response = await api.get('/enrollments', {
        headers: authorization,
      });
      if (response.status === 200) {
        setEnrollmentsList(response.data);
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
          getEnrollments();
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

  // Get All enrollment invoices
  const getEnrollmentInvoices = useCallback(async ({ id }): Promise<void> => {
    try {
      const response = await api.get('/invoices', { headers: authorization });
      if (response.status === 200) {
        setInvoicesList(
          response.data.filter(
            (item: InvoiceData) => id === item.enrollment_id,
          ),
        );
        console.log(response.data);
      }
    } catch (err) {
      console.error(err.response);
    }
  }, []);

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
    getEnrollments();
  }, [getAllEducInsts, getAllStudents, getEnrollments]);

  useEffect(() => {
    if (Object.keys(modalData).length !== 0) {
      getEnrollmentInvoices(modalData);
      setShowModal(true);
    }
  }, [modalData, getEnrollmentInvoices]);

  useEffect(() => {
    if (showModal === false) {
      setModalData([]);
    }
  }, [showModal]);

  return (
    <>
      <Container>
        <Modal isOpen={showModal} onRequestClose={() => setShowModal(false)}>
          <ListItemsContainer>
            <ListContentTitle />
            <ListItemsHeader>
              <HeaderItem>Nome do Curso</HeaderItem>
              <HeaderItem>Valor da parcela</HeaderItem>
              <HeaderItem>Data de vencimento</HeaderItem>
              <HeaderItem>Status</HeaderItem>
            </ListItemsHeader>
            <ListItemsContent>
              {invoicesList.map((item: InvoiceData, i) => {
                return (
                  <ListItem key={i.toString()}>
                    <ListItemElement>
                      {
                        enrollmentsList.find(
                          ({ id }) => id === item.enrollment_id,
                        )?.courseName
                      }
                    </ListItemElement>
                    <ListItemElement>
                      {`R$ ${
                        item.invoiceValue === undefined
                          ? 0
                          : item.invoiceValue
                              .replace('.', ',') // replace decimal point character with ,
                              .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')
                      } `}
                    </ListItemElement>
                    <ListItemElement>
                      {format(parseJSON(item.dueDate), 'dd/MM/yyyy')}
                    </ListItemElement>
                    <ListItemElement>{item.status}</ListItemElement>
                  </ListItem>
                );
              })}
            </ListItemsContent>
            <ListItemsFooter />
          </ListItemsContainer>
          <Button
            type="button"
            onClick={() => setShowModal(false)}
            style={{ width: '10%', position: 'absolute', bottom: 5, right: 5 }}
          >
            Fechar Modal
          </Button>
        </Modal>
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
            <ListItemsContainer>
              <ListContentTitle />
              <ListItemsHeader>
                <HeaderItem>Nome Estudante</HeaderItem>
                <HeaderItem>Instituição de Ensino</HeaderItem>
                <HeaderItem>Curso</HeaderItem>
                <HeaderItem>Valor Total</HeaderItem>
                <HeaderItem>Parcelas</HeaderItem>
                <HeaderItem>Dia vencimento</HeaderItem>
              </ListItemsHeader>
              <ListItemsContent>
                {enrollmentsList.map((item: EnrollmentData, i) => {
                  return (
                    <ListItem
                      key={i.toString()}
                      onClick={() => setModalData(item)}
                    >
                      <ListItemElement>
                        {
                          studentsList.find(({ id }) => id === item.student_id)
                            ?.name
                        }
                      </ListItemElement>
                      <ListItemElement>
                        {
                          educInstsList.find(
                            ({ id }) => id === item.educinst_id,
                          )?.name
                        }
                      </ListItemElement>
                      <ListItemElement>{item.courseName}</ListItemElement>
                      <ListItemElement>{`R$ ${
                        item.totalValue === undefined
                          ? 0
                          : parseInt(item.totalValue, 10)
                              .toFixed(2) // always two decimal digits
                              .replace('.', ',') // replace decimal point character with ,
                              .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')
                      } `}</ListItemElement>
                      <ListItemElement>{item.numberInvoices}</ListItemElement>
                      <ListItemElement>{item.dueDayInvoices}</ListItemElement>
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

export default Enrollment;
