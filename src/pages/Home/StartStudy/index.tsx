import Button from '../../../components/Button';
import { Typography } from '../../../components/Typography/styles';
import { Container, Timer, Input } from './styles';

const AddStudy = () => {
  return (
    <Container>
      <Typography>Choose a card and start the timer</Typography>

      <Timer>
        <Input type=""></Input>
      </Timer>

      <Button>Start</Button>
    </Container>
  );
};

export default AddStudy;
