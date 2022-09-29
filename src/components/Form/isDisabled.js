const isDisabled = (fields, errors) => {
  const keys = Object.keys(fields);
  for (const key of keys) {
    if (!fields[key]) return true;
  }
  if (Object.keys(errors).length) return true;
  return false;
};

export default isDisabled;
