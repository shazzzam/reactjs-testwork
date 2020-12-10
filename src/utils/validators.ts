export const required = (value: any) =>
  value ? undefined : 'Это поле обязательное';
export const mustBeNumber = (value: any) =>
  isNaN(value) ? 'Это поле должно содержать число' : undefined;
export const minValue = (min: number) => (value: any) =>
  isNaN(value) || value < min
    ? 'Это поле не может быть меньше ноля'
    : undefined;
export const composeValidators = (...validators: Array<Function>) => (
  value: string
) =>
  validators.reduce((error, validator) => error || validator(value), undefined);
