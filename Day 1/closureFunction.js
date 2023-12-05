let counter = 0;

const add = () => {return ++counter }


console.log( add() );
console.log( add() );
counter = 23
console.log( add() );

// closure 
const add2 = () => {
    let count = 0;
      return () => {
        return ++count;
    };
  }
  
const addCounter = add2();

console.log(addCounter());
count = 512
console.log(addCounter());
  