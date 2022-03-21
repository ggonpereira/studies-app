import styled from 'styled-components';

export const ListStyled = styled.aside`
  display: flex;
  justify-content: center;
  flex: 1;
  flex-direction: column;
  gap: 10px;

  @media screen and (max-width: 769px) {
    flex: none;
    width: 100%;
  }
`;

export const Menu = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;

  list-style-type: none;
`;
