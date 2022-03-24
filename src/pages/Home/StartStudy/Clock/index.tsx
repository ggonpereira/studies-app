import { memo, useMemo } from 'react';
import { Container, Timer, Separator } from './styles';

interface Props {
  time: number;
}

const Clock = ({ time }: Props) => {
  const [minutes, seconds]: string[] = useMemo(() => {
    if (time < 0) return [`00`, `00`];

    const minutesNumber = Math.floor(time / 60);
    const secondsNumber = time % 60;

    return [String(minutesNumber).padStart(2, '0'), String(secondsNumber).padStart(2, '0')];
  }, [time]);

  return (
    <Container data-testid="clockContainer">
      <Timer data-testid="minutesUnity">{minutes[0]}</Timer>
      <Timer data-testid="minutesTen">{minutes[1]}</Timer>
      <Separator>:</Separator>
      <Timer data-testid="secondsUnity">{seconds[0]}</Timer>
      <Timer data-testid="secondsTen">{seconds[1]}</Timer>
    </Container>
  );
};

export default memo(Clock);
