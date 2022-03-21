import React from 'react';
import { ButtonStyled } from './styles';

interface Props {
  children: React.ReactNode;
}

const Button = ({ children }: Props) => {
  return <ButtonStyled>{children}</ButtonStyled>;
};

export default Button;
