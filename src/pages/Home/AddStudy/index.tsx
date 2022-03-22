import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import Button from '../../../components/Button';
import { Typography } from '../../../components/Typography/styles';
import { Form, Container, Input } from './styles';
import { Studies } from '../../../types/Studies';
import { ThemeContext } from '../../../context/ThemeContext';

interface Props {
  addNewStudy: React.Dispatch<React.SetStateAction<Studies[]>>;
}

const AddStudy = ({ addNewStudy }: Props) => {
  const { register, handleSubmit, reset } = useForm<Studies>();
  const { selectedTheme } = useContext(ThemeContext);

  const onSubmit = (data: Studies) => {
    if (data) {
      const storedStudies = localStorage.getItem('@studiesApp:Studies');
      const newStudy: Studies = {
        id: String(Math.random()).split('.')[1],
        title: data.title,
        time: data.time,
        isCurrentStudy: false
      };

      if (storedStudies) {
        const parsedData: Studies[] = JSON.parse(storedStudies);
        parsedData.push(newStudy);

        addNewStudy(parsedData);
        reset();
      } else {
        addNewStudy([newStudy]);
        localStorage.setItem('@studiesApp:Studies', JSON.stringify([newStudy]));
        reset();
      }
    }
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Container>
        <div>
          <label htmlFor="title">
            <Typography>Add something new to study</Typography>
          </label>
          <Input
            type="text"
            {...register('title')}
            id="title"
            placeholder="What do you wanna study?"
            required
          />
        </div>
        <div>
          <label htmlFor="time">
            <Typography>Time</Typography>
          </label>
          <Input
            type="time"
            step="1"
            {...register('time')}
            id="time"
            min="00:00:00"
            max="01:59:00"
            required
            className={selectedTheme === 'dark' ? 'darkTheme' : undefined}
          />
        </div>
      </Container>

      <Button>Add New</Button>
    </Form>
  );
};

export default AddStudy;
