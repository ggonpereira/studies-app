import styled from 'styled-components';

export const ButtonStyled = styled.button`
  padding: 5px 13px;
  max-width: 200px;
  width: 100%;
  border-radius: 7px;
  background-color: #9ae760;
  border: 0;
  cursor: pointer;
  height: 42px;
  font-size: 1.2em;
  font-weight: 600;
  text-transform: uppercase;
  color: #353332;
  margin: 0 auto;
  transition: 0.3s all;
  border-bottom: 3px solid #7cc247;

  box-shadow: 3px 3px 8px 0px #7ad435a2;

  &:focus {
    border-bottom: 0;
  }
`;
