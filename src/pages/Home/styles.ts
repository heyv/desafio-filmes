import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  background: rgb(240 240 245);
`;

export const Catalog = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;

  max-width: 900px;
  margin: 20px auto;
`;

export const Card = styled.div`
  width: 33.333%;

  padding-left: 15px;
  padding-right: 15px;
  margin-bottom: 30px;
  transition: transform 0.2s;

  &:hover {
    transform: translateX(-10px) translateY(-10px);
  }

  div {
    border-radius: 5px;

    color: #28262e;

    box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.2);

    div {
      padding: 10px;
    }
  }

  img {
    width: 100%;
    height: 100%;
    border-radius: 5px 5px 0 0;
  }
`;

export const Title = styled.p`
  font-weight: bold;
`;

export const Genero = styled.p`
  font-size: 15px;
`;
