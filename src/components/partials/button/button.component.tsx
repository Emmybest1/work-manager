import React from 'react';
import './button.style.scss';

export enum ButtonVariation {
  success = 'success',
  warning = 'warning',
  error = 'error',
}

export enum ButtonStructure {
  border = 'border',
  curve = 'curve',
  curveBorder = 'curve-border',
}

type TButtonProps = {
  className?: string;
  children: React.ReactNode;
  variation?: ButtonVariation.success | ButtonVariation.warning | ButtonVariation.error;
  buttonStructure?: ButtonStructure.border | ButtonStructure.curve | ButtonStructure.curveBorder;
  [x: string]: any;
};

const Button: React.FC<TButtonProps> = ({
  className,
  children,
  variation,
  buttonStructure,
  ...otherProps
}): JSX.Element => {
  return (
    <button
      className={`wm-button wm-button--${variation ? variation : ''} ${className ? className : ''}`}
      data-buttonstructure={buttonStructure ? buttonStructure : ''}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default Button;
