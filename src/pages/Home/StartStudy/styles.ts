import styled from 'styled-components';

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
`;

export const Timer = styled.div``;

export const Input = styled.input`
  height: 100%;
  padding: 8px;
  font-size: 1.2em;
  border: 2px solid #e0e0e0;
  border-radius: 5px;
  color: ${(props) => props.theme.colors.text};
`;
