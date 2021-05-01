/**
 * @file: Button
 * @info: Button component of App
 */

// Dependencies import
import React, { ButtonHTMLAttributes } from 'react';

// Styles import
import { Container } from './styles';

// Interface & types definition
type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

const Button: React.FC<ButtonProps> = ({ children, ...rest }) => (
  <Container type="button" {...rest}>
    {children}
  </Container>
);

export default Button;
