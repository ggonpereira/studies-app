import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 1100px;
  height: 100vh;
  padding: 0 20px;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 3%;

  margin: 0 auto;

  main {
    display: flex;
    flex-direction: column;
    flex: 2;
    gap: 20px;
    width: 100%;
  }

  @media screen and (max-width: 769px) {
    flex-direction: column;
    max-width: 480px;
    margin-top: 60px;

    main {
      flex: none;
    }
  }
`;
