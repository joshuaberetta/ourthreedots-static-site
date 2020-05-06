export const getLocation = (url: string) => {
  const arr = url.split("/");
  return arr[arr.length - 1];
};
