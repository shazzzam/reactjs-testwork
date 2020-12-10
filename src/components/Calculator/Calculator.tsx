import React, { useState } from 'react';
import { Field, Form } from 'react-final-form';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import { courseFetch } from '../../store/course/courseActions';

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
  const loading = useSelector((state: RootStateOrAny) => state.loading);
  const course = useSelector((state: RootStateOrAny) => state.course);
  const dispatch = useDispatch();
  const [value, setValue] = useState<number>(0);

  const submitHandler = (event: FormData) => {
    setValue(parseFloat(event.sumG));
    dispatch(courseFetch());
  };

  return (
    <div className="calculator">
      {loading ? <h1>Loading</h1> : null}
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
                    {!loading && course.buy ? (
                      <p className="calculator__result">
                        <span>{value} грн </span>
                        по курсу
                        <span> {course.buy}$ </span>
                        это
                        <span> {(value / course.buy).toFixed(2)}$</span>
                      </p>
                    ) : (
                      ''
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
