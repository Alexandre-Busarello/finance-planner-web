import React, { useRef, useCallback } from 'react';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import { FiArrowLeft } from 'react-icons/fi';

import { FormHandles } from '@unform/core';
import { Link, useHistory } from 'react-router-dom';
import { Container, Content } from './styles';
import Header from '../../components/Header';
import Input from '../../components/Input';
import Button from '../../components/Button';
import { useToast } from '../../hooks/toast';
import api from '../../services/api';
import getValidationErrors from '../../utils/getValidationErrors';

interface MonthlyIncomeFormData {
  month: number;
  year: number;
  value: number;
}

const MonthlyIncome: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const { addToast } = useToast();
  const history = useHistory();

  const handleSubmit = useCallback(
    async (data: MonthlyIncomeFormData) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          month: Yup.number().required('Mês obrigatório'),
          year: Yup.number().required('Ano obrigatório'),
          value: Yup.number().required('Valor obrigatório'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        await api.post('/monthly-incomes', {
          month: Number(data.month),
          year: Number(data.year),
          value: Number(data.value),
        });

        addToast({
          type: 'success',
          title: 'Cadastro realizado!',
          description: 'Confira novamente seu valor disponível para alocação',
        });

        history.push('/');
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);
          formRef.current?.setErrors(errors);

          return;
        }

        addToast({
          type: 'error',
          title: 'Erro no cadastro',
          description: 'Ocorreu um erro ao fazer cadastro, tente novamente.',
        });
      }
    },
    [addToast, history],
  );

  return (
    <Container>
      <Header />
      <Content>
        <section>
          <p>Escolha o mês, ano e valor para adicionar a receita</p>
        </section>
        <Form ref={formRef} onSubmit={handleSubmit}>
          <Input name="month" placeholder="Mês" />
          <Input name="year" placeholder="Ano" />
          <Input name="value" placeholder="Valor" />

          <Button type="submit">Cadastrar</Button>
        </Form>

        <Link to="/dashboard">
          <FiArrowLeft />
          Voltar
        </Link>
      </Content>
    </Container>
  );
};

export default MonthlyIncome;
