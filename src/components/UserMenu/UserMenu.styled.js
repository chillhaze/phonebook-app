import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  justify-content: flex-end;
  font-size: 16px;
  @media (max-width: 550px) {
    flex-direction: column;
  }
`;
export const Title = styled.h2`
  display: block;
  padding-top: 10px;
  font-weight: 400;
  /* @media (max-width: 550px) {
    display: none;
  } */
`;
export const Accent = styled.span`
  font-weight: 600;
  font-size: 20px;
`;
