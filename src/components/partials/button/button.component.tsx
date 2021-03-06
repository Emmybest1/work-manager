import React from 'react';
import './button.style.scss';

enum ButtonVariation {
  success = 'success',
  warning = 'warning',
  error = 'error',
}

type TButtonProps = {
  className?: string;
  children: React.ReactNode;
  variation?: ButtonVariation.success | ButtonVariation.warning | ButtonVariation.error;
  [x: string]: any;
};

const Button: React.FC<TButtonProps> = ({className, children, variation, ...otherProps}): JSX.Element => {
  return <button className={`wm-button wm-button--${variation} ${className}`}>{children}</button>;
};

export default Button;
