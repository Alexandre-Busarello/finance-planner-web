import React from 'react';

import { Link } from 'react-router-dom';
import { Container } from './styles';
import { useAuth } from '../../hooks/auth';

const Header: React.FC = () => {
  const { signOut } = useAuth();

  return (
    <Container>
      <header>
        <div>
          <h1>
            <Link to="/">Finance Planner</Link>
            <span>.</span>
          </h1>
        </div>
        <ul>
          <li>
            <button type="button" onClick={signOut}>
              Sair
            </button>
          </li>
        </ul>
      </header>
    </Container>
  );
};

export default Header;
