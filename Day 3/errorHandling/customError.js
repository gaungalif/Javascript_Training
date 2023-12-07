//custom error
// const json = '{ "name": "Yoda", "age": 20 }';
// const json = '{"age": 20 }';

// try {
//   const user = JSON.parse(json);
 
//   if (!user.name) {
//     throw new SyntaxError("'name' is required.");
//   }
//   console.log(user.name); // undefined
//   console.log(user.age);  // 20

// } catch (error) {
//     if (error instanceof SyntaxError) {
//       console.log(`JSON Error: ${error.message}`);
//     } else if (error instanceof ReferenceError) {
//       console.log(error.message);
//     } else {
//       console.log(error.stack);
//     }
// }

// class ValidationError
class ValidationError extends Error {
    constructor(message) {
      super(message);
      this.name = "ValidationError";
    }
}

const json2 = '{ "name": "Yoda", "age": 20 }';
// const json2 = '{ "age": 20 }';

try {
    const user = JSON.parse(json2);
     
    if (!user.name) {
        throw new ValidationError("'name' is required.");
    }
    if (!user.age) {
        throw new ValidationError("'age' is required.");
    }
    console.log(user.name); // undefined
    console.log(user.age);  // 20
    
} catch (error) {
    if (error instanceof SyntaxError) {
        console.log(`JSON SyntaxError: ${error.message}`);
    } else if (error instanceof ValidationError) {
        console.log(`Invalid data: ${error.message}`);
    } else if (error instanceof ReferenceError) {
        console.log(error.message);
    } else {
        console.log(error.stack);
    }
}
