export const camelToDash = (str: string): string => {
  return str.trim().toLowerCase().split(" ").join("-");
};

// just include in web and app development....
