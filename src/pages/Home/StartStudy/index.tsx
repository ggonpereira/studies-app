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

  const [isActive, setIsActive] = useState<boolean>(false);
  const [time, setTime] = useState<number>(0);

  let countdownTimeout: number;

  useEffect(() => {
    if (currentStudy?.time) {
      const currentTimeInSeconds = timeToSeconds(currentStudy.time);
      setTime(currentTimeInSeconds);
    }

    if (isActive) {
      setIsActive(false);
      window.clearTimeout(countdownTimeout);
    }
  }, [currentStudy]);

  useEffect(() => {
    if (isActive && time <= 0) return endTask();

    if (time > 0 && isActive) {
      countdownTimeout = window.setTimeout(() => {
        setTime(time - 1);
      }, 1000);
    }
  }, [time, isActive]);

  function handleStartCountdown() {
    if (isActive) {
      setIsActive(false);
      setTime(time);
      window.clearTimeout(countdownTimeout);
    } else {
      setIsActive(true);
    }
  }

  return (
    <Container>
      <Typography>Choose a card and start the timer</Typography>

      <Clock time={time} />

      <Button type="button" onClick={handleStartCountdown}>
        Start
      </Button>
    </Container>
  );
};

export default StartStudy;
