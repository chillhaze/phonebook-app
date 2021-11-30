import styled from '@emotion/styled';

export const ListItem = styled.li`
  position: relative;
  min-width: 180px;
  width: 22%;
  text-align: left;
  transition: transform 0.25s linear, -webkit-transform 0.25s linear;
  overflow: hidden;

  &:hover {
    transform: scale(1.1);
  }
`;
export const Name = styled.p`
  /* font-weight: 400; */
`;
export const Number = styled.p`
  /* font-weight: 600; */
`;
export const BtnDelete = styled.button`
  padding: 5px;
  font-size: 20px;
  line-height: 10px;
  position: absolute;
  top: -7px;
  right: -9px;
  color: #e41f22;
  border: 0;
  outline: 0;
  background-color: transparent;
  cursor: pointer;
`;
