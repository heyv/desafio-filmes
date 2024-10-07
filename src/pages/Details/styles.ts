import styled from 'styled-components';

export const Container = styled.div`
  background: #28262eb5;
  height: 100%;
`;

export const Content = styled.div`
  height: 90.8vh;

  display: flex;
  align-items: stretch;
  
`;

export const LeftSide = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  padding: 10px;

  width: 100%;
  max-width: 700px;
`;

export const Title = styled.div`
  height: 40%;
  margin-left: 40px;
  margin-top: 40px;

  h1 {
    font-size: 40px;
    margin: 0;
  }
  h3 {
    font-size: 20px;
    margin-top: 10px;
  }
`;

export const Sinopse = styled.div`
  margin-left: 40px;
  height: 100%;
  text-align: justify;

  align-self: center;

  h3 {
    font-size: 20px;
  }
`;

export const RightSide = styled.div`
  width: 100%;

  display: flex;

  justify-content: center;

  div {
    width: 90%;
  }
`;

export const Button = styled.button`
  margin-top: 10px;
  width: 100%;
`;

export const Trailer = styled.div`
  margin-top: 40px;
  position: relative;
  height: 60%;
  width: 100%;
`;
