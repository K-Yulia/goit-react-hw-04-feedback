import styled from 'styled-components';

export const Box = styled.div`
  list-style: none;
  display: flex;
  padding: 0;
`;
export const Button = styled.button`
  width: 90px;
  height: 35px;
  font-size: 16px;
  margin: 5px;
  background-color: #9393efd4;
  border-radius: 15px;
  padding: 3px 5px;
  border: 0;
  box-shadow: rgba(0, 0, 0, 0.64) 5px 5px 5px 0px;
  cursor: pointer;
  :focus {
    background-color: #166eaaf0;
  }
`;
