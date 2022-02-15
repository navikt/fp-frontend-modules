export const getValidationRules = (validate?: ((value: string) => any)[]) => validate ? validate.reduce((acc, fn, index) => ({
  ...acc,
  [index]: (value: any) => fn(value) || true,
}), {}) : undefined;

export const getError = (errors: { [x: string]: any; }, name: string): string | undefined => {
  const error = name.split('.').reduce((o, i) => (o !== undefined ? o[i] : o), errors);
  return error?.message;
};
