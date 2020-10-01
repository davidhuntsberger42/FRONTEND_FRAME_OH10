export const increment = () => ({
  type: 'INCREMENT'
});

export const decrement = () => ({
  type: 'DECREMENT'
});

export const reset = () => ({
  type: 'RESET'
});

export const inptNum = () => ({
  type: 'INPT_NUM'
});

export const changedInNum = (num) => ({
  type: 'CHANGED_IN_NUM',
  num
});