/**
 * @file: Input
 * @info: Input component of App
 */

// Dependencies import
import React, { InputHTMLAttributes } from 'react';
import { IconBaseProps } from 'react-icons';

// Styles import
import { Container } from './styles';

// Interface definition
interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  icon?: React.ComponentType<IconBaseProps>;
}

const Input: React.FC<InputProps> = ({ icon: Icon, ...rest }) => {
  return (
    <Container>
      {Icon && <Icon size={14} />}
      <input {...rest} />
    </Container>
  );
};

export default Input;
