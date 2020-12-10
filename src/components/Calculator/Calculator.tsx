import React from 'react';
import { Field, Form } from 'react-final-form';
import {
  composeValidators,
  minValue,
  mustBeNumber,
  required,
} from '../../utils/validators';

import './calculator.scss';

interface FormData {
  sumG: string;
}

export const Calculator = () => {
  const submitHandler = (event: FormData) => {
    console.log(parseFloat(event.sumG));
  };

  return (
    <div className="calculator">
      <h1 className="calculator__title title">Калькулятор</h1>
      <Form
        onSubmit={submitHandler}
        render={({ handleSubmit }) => (
          <form onSubmit={handleSubmit} className="calculator__form">
            <Field
              name="sumG"
              validate={composeValidators(required, mustBeNumber, minValue(0))}
            >
              {({ input, meta }) => {
                const isError = meta.error && meta.touched;
                return (
                  <>
                    <input
                      className={`calculator__input ${
                        isError && 'calculator__input--error'
                      }`}
                      {...input}
                      type="text"
                      placeholder="Сумма, грн"
                    />
                    {isError && (
                      <span className="calculator__error">{meta.error}</span>
                    )}
                  </>
                );
              }}
            </Field>
            <button className="calculator__submit btn" type="submit">
              Посчитать
            </button>
          </form>
        )}
      />
    </div>
  );
};
