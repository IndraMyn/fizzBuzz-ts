// get from parameter input
let input = parseInt(process.argv[2]);

const fizzBuzz = (num: number) => {
    for (let i = 0; i <= num; i++) {
        
        if (i % 2 === 0 && i % 3 === 0) console.log("Fizz Buzz");
        else if (i % 2 === 0) console.log("Fizz");
        else if (i % 3 === 0) console.log("Buzz");
        else console.log(i);
    
    }
}

fizzBuzz(input);