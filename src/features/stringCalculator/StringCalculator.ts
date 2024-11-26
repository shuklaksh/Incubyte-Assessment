const addNumbers = (numbers: string): number => {
    if(numbers === "") return 0;
    let delimiterPattern: RegExp = /[\n,]+/;
    let numbersToProcess = numbers;

    if (numbers.startsWith("//")) {
        const delimiterMatch = numbers.match(/^\/\/\[(.+)]\n/) ? numbers.match(/^\/\/\[(.+)]\n/) : numbers.match(/^\/\/(.+)\n/)// Match the custom delimiter syntax
        if (delimiterMatch) {
            const customDelimiters = delimiterMatch[1]
                .split('][')
                .map((delimiter) => `\\${delimiter}`); // Escape the delimiters to handle special characters
            delimiterPattern = new RegExp(`[${customDelimiters.join('')}\\n,]+`); // Combine all delimiters with newlines and commas
            numbersToProcess = numbers.substring(delimiterMatch[0].length); // Strip the delimiter line
        }
    }


    const negativeNumbers : number[] = [];

    const sum = numbersToProcess
    .split(delimiterPattern)
    .reduce((sum, num) => {
        const number = Number(num);
        if(Number.isNaN(number)) throw new Error('Inavlid String ')
        if (number < 0) {
            negativeNumbers.push(number);
            return sum;
        }
        if(number > 1000) return sum;
        return sum + number;
    }, 0);

        if(negativeNumbers.length) {
            throw new Error(`negatives not allowed: ${negativeNumbers.join(", ")}`);
        }
        else return sum;

}

  
  export default addNumbers;
  