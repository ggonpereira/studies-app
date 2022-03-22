import { Container, Timer, Separator } from './styles';

const Clock = () => {
  return (
    <Container>
      <Timer>0</Timer>
      <Timer>0</Timer>
      <Separator>:</Separator>
      <Timer>0</Timer>
      <Timer>0</Timer>
    </Container>
  );
};

export default Clock;
