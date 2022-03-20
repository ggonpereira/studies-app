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

export const Item = styled.li<{ active: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 5px;

  padding: 7px 10px;
  border-radius: 7px;
  cursor: pointer;
  background-color: ${(props) => (props.active ? '#a4e573' : '#d6d6d6')};

  box-shadow: 3px 3px 8px 0px rgba(87, 87, 87, 0.171);

  div span {
    opacity: 0.6;
    font-size: 0.95em;
  }

  img {
    height: 20px;
    width: 20px;
  }
`;

export const ItemTitle = styled.h3`
  font-weight: 600;
  color: #414040;
`;
