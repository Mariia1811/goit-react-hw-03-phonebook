import styled from 'styled-components';

export const ItemEl = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const NumberEl = styled.span`
  margin: 0 10px;
  font-style: italic;
`;
export const BtnDellete = styled.button`
  padding: 4px;
  font-size: 20px;
  cursor: pointer;
  border: 1px solid rgba(33, 33, 33, 0.5);
  border-radius: 4px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  outline: none;
  &:hover {
    background-color: cadetblue;
    border-color: cadetblue;
    overflow: hidden;
  }
`;
