import Button from '../../../components/Button';
import { Typography } from '../../../components/Typography/styles';
import Clock from './Clock';
import { Container } from './styles';

const AddStudy = () => {
  return (
    <Container>
      <Typography>Choose a card and start the timer</Typography>

      <Clock />

      <Button>Start</Button>
    </Container>
  );
};

export default AddStudy;
