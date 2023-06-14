const parserTelephoneNumber = (number) => {
  const numberInStaples = number.slice(1, 4);
  const firstThree = number.slice(4, 7);
  const firstTwo = number.slice(7, 9);
  const secondTwo = number.slice(9);
  
  const result = `+${number.slice(0, 1)} (${numberInStaples}) ${firstThree}-${firstTwo}-${secondTwo}`;
  return result;
};
  
export default parserTelephoneNumber;