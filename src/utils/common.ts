const ONE_MIN = 60;

export const getTimeBySec = (newSeconds: number) => {
  const min = Math.floor(newSeconds / ONE_MIN);
  const sec = newSeconds - ONE_MIN * min;

  return { min, sec };
};

export const addLeadingZero = (num: number) => {
  if (num >= 10) {
    return num + '';
  }

  return (num + '').padStart(2, '0');
};
