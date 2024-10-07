import React, { useEffect, useState } from 'react';
import { Container, Content, List, Title, Table } from './styles';

import Header from '../../components/Header/';

interface FilmList {
  id: string;
  titulo: string;
  genero: string;
  ano: string;
}

const MyList: React.FC = () => {
  const [filmList, setFilmList] = useState<FilmList[]>(() => {
    const storageFilms = localStorage.getItem('@FilmList');
    if (storageFilms) {
      return JSON.parse(storageFilms);
    }

    return [];
  });

  useEffect(() => {
    localStorage.setItem('@FilmList', JSON.stringify(filmList));
  }, [filmList]);

  function handleRemoveFilm(id: any) {
    const newList = filmList.filter((item) => item.id !== id);

    setFilmList(newList);
  }

  return (
    <Container>
      <Header />
      <Content>
        <List>
          <Title>
            <h1>Minha Lista </h1>
          </Title>
          <Table>
            <thead>
              <tr>
                <th style={{ width: '20%' }}>Titulo</th>
                <th style={{ width: '20%' }}>Genero</th>
                <th style={{ width: '10%' }}>Ano</th>
                <th style={{ width: '10%' }}></th>
              </tr>
            </thead>
            <tbody>
              {filmList.map((film) => (
                <tr key={film.id}>
                  <td>{film.titulo}</td>
                  <td>{film.genero}</td>
                  <td>{film.ano}</td>
                  <td>
                    <button
                      onClick={() => handleRemoveFilm(film.id)}
                      className="btn-floating btn-small waves-effect waves-light red"
                    >
                      X
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </List>
      </Content>
    </Container>
  );
};

export default MyList;
