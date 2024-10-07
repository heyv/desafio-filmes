import { Wrapper, HeaderContent } from './styles';

import { useAuth } from '../../hooks/AuthContext';

import logoImg from '../../assets/logo.png';

import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  const { user, signOut } = useAuth();

  return (
    <Wrapper>
      <HeaderContent>
        <div>
          <Link to={'/myList'}>
            <strong>{user}</strong>
          </Link>
        </div>
        <Link to={'/home'}>
          <img src={logoImg} alt="logo" />
        </Link>
        <button
          className="waves-effect waves-light btn-small"
          onClick={signOut}
        >
          Sair
        </button>
      </HeaderContent>
    </Wrapper>
  );
};

export default Header;
