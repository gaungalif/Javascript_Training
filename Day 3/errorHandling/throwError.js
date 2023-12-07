// contoh 1
// const json = '{ "name": "Yoda", "age": 20 }';
 
// try {
//   const user = JSON.parse(json);
 
//   console.log(user.name);
//   console.log(user.age);
// } catch (error) {
//   console.log(error.name);
//   console.log(error.message);
// }

// contoh 2
// const json = `{ bad json }`;
 
// try {
//   const user = JSON.parse(json);
 
//   console.log(user.name);
//   console.log(user.age);
// } catch (error) {
//   console.log(error.name);
//   console.log(error.message);
// }

// contoh 3
// const json_age = '{ "age": 20 }';
 
// try {
//   const user = JSON.parse(json_age);
 
//   console.log(user.name); // undefined
//   console.log(user.age);  // 20
// } catch (error) {
//   console.log(error.name);
//   console.log(error.message);
// }

// throwing error
// const json = '{ "name": "Yoda", "age": 20 }';


const json = '{ "age": 20 }';
try {
  const user = JSON.parse(json);
 
  if (!user.name) {
    throw new SyntaxError("'name' is required.");
  }
  console.log(user.name); // undefined
  console.log(user.age);  // 20
  //   errorCode;
} catch (error) {
    console.log(`JSON Error: ${error.message}`);
}
// } catch (error) {
//     if (error instanceof SyntaxError) {
//       console.log(`JSON Error: ${error.message}`);
//     } else if (error instanceof ReferenceError) {
//       console.log(error.message);
//     } else {
//       console.log(error.stack);
//     }
// }