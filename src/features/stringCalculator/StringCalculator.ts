function addNumbers(numbers: string){
    if(numbers == "") return 0;
    const numbersArray = numbers.split(",");
    let sum = 0;
    for(let i = 0; i < numbersArray.length; i++) {
        sum += Number(numbersArray[i]);
    }
    return sum;
}

export default addNumbers;