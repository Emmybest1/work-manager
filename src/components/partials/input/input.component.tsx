import React from 'react';

type TInputProps = {
  id: string;
  type: string;
  labelText?: string;
  [x: string]: any;
};
const Input: React.FC<TInputProps> = ({id, type = 'text', labelText, ...otherProps}): JSX.Element => {
  return (
    <>
      {labelText && <label htmlFor={id}>{labelText}</label>}
      {type === 'textarea' ? (
        <textarea
          id={id}
          cols={30}
          rows={10}
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
              : !/((submit)||(clear)||(reset) || (file))/gi.test(type)
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
