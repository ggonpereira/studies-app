import React from 'react';
import Button from '../../../components/Button';
import { Typography } from '../../../components/Typography/styles';
import { Form, Container, Input } from './styles';

const AddStudy = () => {
  return (
    <Form>
      <Container>
        <div>
          <label htmlFor="task">
            <Typography>Add something new to study</Typography>
          </label>
          <Input
            type="text"
            name="task"
            id="task"
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
            name="time"
            id="time"
            min="00:00:00"
            max="01:30:00"
            required
          />
        </div>
      </Container>

      <Button />
    </Form>
  );
};

export default AddStudy;
