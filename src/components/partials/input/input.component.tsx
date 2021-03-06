import React from 'react';
import './input.style.scss';

type TInputProps = {
  id: string;
  type: string;
  labelText?: string;
  [x: string]: any;
};

export const Input: React.FC<TInputProps> = ({id, type = 'text', labelText, ...otherProps}): JSX.Element => {
  return (
    <>
      {labelText && <label htmlFor={id}>{labelText}</label>}
      {type === 'textarea' ? (
        <textarea
          id={id}
          cols={0}
          rows={0}
          aria-label={labelText ? labelText : 'Text Area for entering text'}
          {...otherProps}
        ></textarea>
      ) : (
        <input
          id={id}
          type={type}
          aria-label={
            labelText
              ? labelText
              : !/((submit)||(reset) || (file))/gi.test(type)
              ? 'Input field for entering text'
              : 'Click input'
          }
          {...otherProps}
        />
      )}
    </>
  );
};

export default Input;
