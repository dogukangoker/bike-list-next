export const filterEmptyStringsFromObject = (object: any) => {
  return Object.keys(object).reduce(
    (r: any, key) => (object[key] && (r[key] = object[key]), r),
    {}
  );
};
