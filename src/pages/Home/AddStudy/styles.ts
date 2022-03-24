import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  flex: 3;
  background-color: ${(props) => props?.theme?.colors?.secondary};
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

export const Input = styled.input`
  height: 100%;
  max-height: 42px;
  padding: 8px;
  font-size: 1.2em;
  border: 2px solid ${(props) => props?.theme?.colors?.text};
  border-radius: 5px;
  color: ${(props) => props?.theme?.colors?.text};
  outline: none;
  background-color: ${(props) => props?.theme?.colors?.backgroundSecondary};

  &::placeholder {
    color: ${(props) => props?.theme?.colors?.text};
  }

  &.darkTheme::-webkit-calendar-picker-indicator {
    filter: invert(100%);
  }
`;
