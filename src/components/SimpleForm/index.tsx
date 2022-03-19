import React, { Component } from 'react';
import Button from '../Button';
import { Form, Label, Input } from './styles';

class SimpleForm extends Component {
  render() {
    return (
      <Form>
        <div>
          <Label htmlFor="task">Add something new to study</Label>
          <Input
            type="text"
            name="task"
            id="task"
            placeholder="What do you wanna study?"
            required
          />
        </div>
        <div>
          <Label htmlFor="time">Time</Label>
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

        <Button />
      </Form>
    );
  }
}

export default SimpleForm;
