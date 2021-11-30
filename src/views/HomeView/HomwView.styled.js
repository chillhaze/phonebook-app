import styled from '@emotion/styled';

export const Container = styled.div`
  margin: 32px auto 20px;
  padding: 80px 10px;
  background-color: #ffffff3d;
  border-radius: 5px;
  /* border: 1px solid #1976d2; */
  /* border-radius: 5px; */
  box-shadow: 1px 3px 10px -4px #050505;
`;

export const Title = styled.div`
  padding: 10px 20px 40px;
  max-width: 400px;
  color: #488d96;
  font-size: 36px;
  background-color: #fff;
  text-align: left;
  border-radius: 5px;
  box-shadow: 1px 3px 10px -4px #050505;
  @media (max-width: 550px) {
    font-size: 16px;
  }
`;
export const Accent = styled.span`
  color: #478d95;
  padding: 26px 50px 24px;
  /* padding: 10px; */
  font-size: 60px;
  font-weight: 600;
  /* border: 1px solid #488d96; */
  border-radius: 5px;

  @media (max-width: 550px) {
    font-size: 30px;
  }
`;
