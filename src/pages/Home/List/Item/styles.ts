import styled from 'styled-components';

export const Item = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 5px;

  padding: 7px 10px;
  border-radius: 7px;
  cursor: pointer;
  background-color: ${(props) => props?.theme?.colors?.backgroundSecondary};
  color: ${(props) => props?.theme?.colors?.text};
  box-shadow: 3px 3px 8px 0px rgba(87, 87, 87, 0.171);

  &.active {
    background-color: ${(props) => props?.theme?.colors?.secondary};
    color: ${(props) => props?.theme?.colors?.text};
  }

  &.concluded {
    background-color: ${(props) => props?.theme?.colors?.primary};
    color: ${(props) => props?.theme?.colors?.background};
  }

  div span {
    opacity: 0.7;
    font-size: 0.95em;
  }

  img {
    height: 20px;
    width: 20px;
  }

  .icons {
    display: flex;
    gap: 10px;
    align-items: center;
    justify-content: center;

    img:last-of-type {
      transition: 0.3s transform;

      &:hover {
        transform: scale(1.15);
      }
    }
  }
`;

export const ItemTitle = styled.h3`
  font-weight: 600;
`;
