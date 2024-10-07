import React, { useEffect, useState } from 'react';
import apiList from '../../services/apiList';
import {
  Container,
  Content,
  LeftSide,
  RightSide,
  Title,
  Sinopse,
  Button,
  Trailer,
} from './styles';

import Header from '../../components/Header/';

import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

import { useRouteMatch } from 'react-router-dom';

interface FilmList {
  id: string;
  titulo: string;
  ano: string;
  genero: string;
}

interface FilmParams {
  id: string;
}

interface Film {
  id: string;
  titulo: string;
  ano: string;
  genero: string;
  imagem: string;
  trailerIdYoutube: string;
  sinopse: string;
}

const Details: React.FC = () => {
  const [film, setFilm] = useState<Film | null>(null);

  const { params } = useRouteMatch<FilmParams>();

  const [newFilm, setNewFilm] = useState<FilmList[]>(() => {
    const storageFilms = localStorage.getItem('@FilmList');
    if (storageFilms) {
      return JSON.parse(storageFilms);
    }

    return [];
  });

  const newList = newFilm.find((item) => item.id === film?.id);

  useEffect(() => {
    apiList.get(`${params.id}`).then((response) => {
      setFilm(response.data);
    });
  }, [params.id]);

  useEffect(() => {
    localStorage.setItem('@FilmList', JSON.stringify(newFilm));
  }, [newFilm]);

  function handleAddFilm(id: any) {
    if (!newList) {
      setNewFilm([...newFilm, film!]);
      toast.success('Filme Adicionado', {
        position: 'top-center',
      });
    }
  }

  const trailer = `//www.youtube.com/embed/${film?.trailerIdYoutube}`;

  return (
    <Container>
      <Header />

      {film && (
        <Content>
          <LeftSide>
            <Title>
              <h1>{film.titulo} </h1>
              <h3>
                {film.genero}, {film.ano}
              </h3>
            </Title>
            <Sinopse>
              <h3>Sinopse:</h3>
              <p>{film.sinopse}</p>
            </Sinopse>
          </LeftSide>

          <RightSide>
            <div>
              <Trailer>
                <iframe
                  title="trailer"
                  width="100%"
                  height="100%"
                  src={trailer}
                ></iframe>
              </Trailer>
              <div>
                <ToastContainer />
                <Button
                  disabled={newList != null}
                  onClick={() => handleAddFilm(film.id)}
                  className="waves-effect waves-light btn "
                >
                  Adicionar filme
                </Button>
              </div>
            </div>
          </RightSide>
        </Content>
      )}
    </Container>
  );
};
export default Details;
