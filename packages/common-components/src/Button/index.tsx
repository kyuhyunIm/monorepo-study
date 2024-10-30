import { ButtonHTMLAttributes, forwardRef } from 'react';

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  text?: string;
};

// eslint-disable-next-line react/display-name
const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, text }, ref) => (
    // eslint-disable-next-line react/react-in-jsx-scope
    <button ref={ref}>{children ?? text}</button>
  ),
);

export default Button;
