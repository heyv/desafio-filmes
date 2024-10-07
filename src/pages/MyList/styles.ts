import styled from 'styled-components';

export const Container = styled.div``;

export const Content = styled.div`
  display: flex;
  align-items: stretch;
`;

export const List = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  padding: 10px;

  width: 100%;
`;

export const Title = styled.div`
  height: 40%;
  margin-left: 40px;
  margin-top: 40px;

  h1 {
    font-size: 40px;
    margin: 0;
  }
`;

export const Button = styled.button`
  margin-top: 10px;
  width: 100%;
`;

export const Table = styled.table`
  margin-top: 40px;
  margin-left: 40px;
  height: 100%;
  max-width: 900px;

  margin: '20px';
  padding: '10px';
`;
