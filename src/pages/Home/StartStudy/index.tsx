import { useContext, useEffect, useState } from 'react';
import { timeToSeconds } from '../../../common/utils/time';
import Button from '../../../components/Button';
import { Typography } from '../../../components/Typography/styles';
import { ApplicationContext } from '../../../context/ApplicationContext';
import Clock from './Clock';
import { Container } from './styles';

interface Props {
  endTask: () => void;
}

const StartStudy = ({ endTask }: Props) => {
  const { currentStudy } = useContext(ApplicationContext);

  const [time, setTime] = useState<number>(0);

  useEffect(() => {
    if (currentStudy?.time) {
      const currentTimeInSeconds = timeToSeconds(currentStudy.time);
      setTime(currentTimeInSeconds);
    }
  }, [currentStudy]);

  const handleChangeTime = (counter = 0) => {
    setTimeout(() => {
      if (counter > 0) {
        setTime(counter - 1);
        return handleChangeTime(counter - 1);
      }
      endTask();
    }, 1000);
  };

  return (
    <Container>
      <Typography>Choose a card and start the timer</Typography>

      <Clock time={time} />

      <Button type="button" onClick={() => handleChangeTime(time)}>
        Start
      </Button>
    </Container>
  );
};

export default StartStudy;
