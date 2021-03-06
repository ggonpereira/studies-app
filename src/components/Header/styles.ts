import styled from 'styled-components';

export const Container = styled.div`
  height: 60px;
  background: ${(props) => props?.theme?.colors?.primary};
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 30px;

  & > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    max-width: 1100px;
  }
`;

export const ToggleTheme = styled.button`
  background: 0;
  width: 40px;
  height: 40px;
  border: 0;
  border-radius: 100%;
  font-size: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
