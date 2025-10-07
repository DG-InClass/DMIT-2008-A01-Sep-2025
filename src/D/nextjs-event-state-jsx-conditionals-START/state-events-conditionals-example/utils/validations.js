// validations.js
export const isNumber = (value) => !isNaN(value);

export const isEmptyString = (value) => typeof value === 'string' && value.trim() === '';
