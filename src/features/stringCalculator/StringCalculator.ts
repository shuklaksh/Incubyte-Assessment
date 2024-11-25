const addNumbers = (numbers: string): number => 
    numbers
      .split(',')
      .reduce((sum, num) => sum + Number(num), 0);
  
  export default addNumbers;
  