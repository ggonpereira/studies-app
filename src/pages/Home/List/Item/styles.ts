import styled from 'styled-components';

export const Item = styled.li<{ active: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 5px;

  padding: 7px 10px;
  border-radius: 7px;
  cursor: pointer;
  background-color: ${(props) =>
    props.active ? props.theme.colors.primary : props.theme.colors.secondary};
  color: ${(props) => props.theme.colors.text};
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
  color: ${(props) => props.theme.colors.text};
`;
