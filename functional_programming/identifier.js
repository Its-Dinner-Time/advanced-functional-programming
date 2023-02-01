export const identifier = (msg) => {
  return (it) => {
    console.log(`${msg}: `, it);
    return it;
  };
};
