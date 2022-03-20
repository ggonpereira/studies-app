import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  flex: 3;
  background-color: #d6d6d6;
  padding: 15px;
  border-radius: 7px;
  box-shadow: 3px 3px 8px 0px rgba(87, 87, 87, 0.171);
`;

export const Container = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 15px;

  div {
    display: flex;
    flex-direction: column;

    &:nth-child(1) {
      flex: 3;
    }

    &:nth-child(2) {
      flex: 2;
    }
  }

  @media screen and (max-width: 769px) {
    flex-direction: column;

    div {
      justify-content: space-between;
    }
  }
`;

export const Label = styled.label``;

export const Input = styled.input`
  height: 100%;
  max-height: 42px;
  padding: 8px;
  font-size: 1.2em;
  border: 2px solid #e0e0e0;
  border-radius: 5px;
  color: #303332;
  outline: none;
`;
