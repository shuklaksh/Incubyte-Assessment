const addNumbers = (numbers: string): number => {
    let delimiterPattern: RegExp = /[\n,]+/;
    let numbersToProcess = numbers;
    if (numbers.startsWith("//")) {
        const delimiterMatch = numbers.match(/^\/\/(.+)\n/); // Match the custom delimiter syntax
        if (delimiterMatch) {
          const customDelimiter = delimiterMatch[1];
          delimiterPattern = new RegExp(`[${customDelimiter}\n,]+`); // Include newline and comma by default
          numbersToProcess = numbers.substring(delimiterMatch[0].length); // Strip the delimiter line
        }
      }
      return numbersToProcess
        .split(delimiterPattern)
        .reduce((sum, num) => sum + Number(num), 0);
}

  
  export default addNumbers;
  