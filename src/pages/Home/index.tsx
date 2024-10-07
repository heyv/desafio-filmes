import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import Header from '../../components/Header/';
import { Container, Catalog, Card, Title, Genero } from './styles';

interface Filme {
  id: string;
  titulo: string;
  ano: string;
  genero: string;
  imagem: string;
  trailerIdYoutube: string;
  sinopse: string;
}

const Home: React.FC = () => {
  const [listFilms, setListFilms] = useState<Filme[]>([]);

  useEffect(() => {
    fetch('https://pertobilingueadm.com.br/server/testes/filmes/').then(
      (response) => {
        response.json().then((filmes) => {
          setListFilms(filmes);
        });
      }
    );
  }, []);

  return (
    <Container>
      <Header />
      <Catalog>
        {listFilms.map((film) => (
          <Card key={film.id}>
            <Link to={`/details/${film.id}`}>
              <div>
                <img src={film.imagem} alt="logo" />
                <div>
                  <Title>{film.titulo}</Title>
                  <Genero>
                    {film.genero}, {film.ano}
                  </Genero>
                </div>
              </div>
            </Link>
          </Card>
        ))}
      </Catalog>
    </Container>
  );
};
export default Home;
