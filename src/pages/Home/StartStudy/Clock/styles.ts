import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${(props) => props?.theme?.colors?.secondary};
  padding: 20px 30px;
  width: 100%;
  border-radius: 7px;
  gap: 4px;
`;

export const Timer = styled.div`
  color: ${(props) => props?.theme?.colors?.text};
  font-size: 10em;
  background-color: ${(props) => props?.theme?.colors?.backgroundSecondary};
  border-radius: 7px;
  padding: 0 10px;

  box-shadow: inset 0px 0px 0px 2px ${(props) => props?.theme?.colors?.primary};

  @media screen and (max-width: 769px) {
    font-size: 5em;
  }

  @media screen and (max-width: 380px) {
    font-size: 4em;
  }
`;

export const Separator = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(props) => props?.theme?.colors?.text};
  font-size: 10em;
  margin-top: -30px;

  @media screen and (max-width: 769px) {
    font-size: 5em;
    margin-top: -10px;
  }
`;
