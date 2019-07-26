const range = (number) => {
    let arrayOfNumbers = []
    for (let i = 1; i < number + 1; i++) {
        arrayOfNumbers.push(i)
    }
    return arrayOfNumbers;
};

export default range;