import React from 'react';
import { ButtonStyled } from './styles';

interface Props {
  type?: 'button' | 'submit' | 'reset';
  children: React.ReactNode;
  onClick?: () => void;
}

const Button = ({ type, children, onClick }: Props) => {
  return (
    <ButtonStyled type={type} onClick={onClick}>
      {children}
    </ButtonStyled>
  );
};

export default Button;
