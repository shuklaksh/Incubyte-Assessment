const addNumbers = (numbers: string): number => 
    numbers
      .split(/[\n,]+/)
      .reduce((sum, num) => sum + Number(num), 0);
  
  export default addNumbers;
  