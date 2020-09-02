import React, { useEffect, useState } from 'react';
import { GiReceiveMoney } from 'react-icons/gi';
import { RiPlayListAddLine } from 'react-icons/ri';
import { FaMoneyBill } from 'react-icons/fa';

import { Link } from 'react-router-dom';
import { Container, Content } from './styles';
import Header from '../../components/Header';
import api from '../../services/api';

interface ITotalAvailableResponse {
  income_available: number;
}

const Dashboard: React.FC = () => {
  const [incomeAvailable, setIncomeAvailable] = useState(0);

  useEffect(() => {
    async function initialize() {
      const response = await api.get<ITotalAvailableResponse>(
        '/total-available',
      );
      setIncomeAvailable(response.data.income_available);
    }
    initialize();
  }, []);

  return (
    <Container>
      <Header />
      <Content>
        <section className="welcome">
          <p>
            Bem vindo Alexandre, que tal começar cadastrando uma receita para o
            mês?
          </p>
        </section>
        <section className="statistics">
          <div className="statistics-card">
            <p>Total disponível para alocar</p>
            <span>{`R$ ${incomeAvailable.toFixed(2)}`}</span>
          </div>
          <div className="statistics-card">
            <p>Patrimonio total investido</p>
            <span>R$ 0,00</span>
          </div>
          <div className="statistics-card">
            <p>Rentabilidade geral</p>
            <span>0,00%</span>
          </div>
          <div className="statistics-card">
            <p>Reserva de emergencia</p>
            <span>R$ 0,00</span>
          </div>
        </section>
        <section className="actions">
          <Link to="monthly-income" className="action-card">
            <GiReceiveMoney size={48} color="#0D132A" />
            <p>Receitas do mês</p>
          </Link>
          <div className="action-card">
            <RiPlayListAddLine size={48} color="#0D132A" />
            <p>Listas de alocações</p>
          </div>
          <div className="action-card">
            <FaMoneyBill size={48} color="#0D132A" />
            <p>Alocar renda disponível</p>
          </div>
        </section>
      </Content>
    </Container>
  );
};

export default Dashboard;
