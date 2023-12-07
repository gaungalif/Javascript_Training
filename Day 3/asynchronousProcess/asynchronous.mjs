// set timeout
// console.log('Selamat datang!');
 
// setTimeout(() => {
//   console.log('Terima kasih sudah mampir, silakan datang kembali!');
// }, 5000)
 
// console.log('Ada yang bisa dibantu?');

// callback
// function getUsers(callback) {
//   setTimeout(() => {
//     const users = ['John', 'Peter', 'Sandy']
    
//     callback(users)
//   }, 3000)
// }

// getUsers((users) => {
// console.log(users);
// });

// function usersCallback(users) {
//     console.log(users)
// }
// getUsers(usersCallback)

// callback dengan error
// function getUsers(isOffline, callback) {
//     setTimeout(() => {
//       const users = ['John', 'Peter', 'Sandy']
//       if (isOffline) {
//         callback(new Error('Anda sedang offline'), null)
//         return
//       }
//       callback(null, users)
//     }, 1000)
// }
// function usersCallback(error, users) {
//     if (error) {
//       console.log('prosess gagal: ',error.message)
//       return
//     }

//     console.log('proses berhasil: ', users)
// }
// getUsers(false, usersCallback)

// callback hell
// function makeACake(...rawIngredients) {
//   collectIngredients(rawIngredients, function(ingredients) {
//     mixIngredients(ingredients, function(dough) {
//       pourDough(dough, function(pouredDough) {
//         bakeACake(pouredDough, function(cake) {
//           console.log(cake)
//         })
//       })
//     })
//   })
// }

// function buatKue(...bahan){
//   kumpulkanBahan(rawBahan)
//     .then(campurBahan)
//     .then(panggangKue)
//     .then(console.log)
// }

// promise

// function doSomeThing(...params){
//   return new Promise((resolve, reject) => {
//       try {/** blocking code with result **/
//         if (result.success) {
//           resolve(result.data)
//         }else{
//           reject(new Error('error'))
//         }

//       } catch(err){
//         reject(err)
//       }
//   })
// }

// doSomeThing(...params)
//   .then(data => console.log(data))
//   .catch(err => console.log(err))

// promise
// function getUsers(isOffline) {
//   // return a promise object
//   return new Promise((resolve, reject) => {

//     // simulate network delay
//     setTimeout(() => {
//       const users = ['John', 'Jack', 'Abigail'];
    
//       if (isOffline) {
//         reject(new Error('cannot retrieve users due offline'));
//         return;
//       }

//       resolve(users);
//     }, 3000);
//   });
// }

// getUsers(false)
//   .then(users => console.log(users))
//   .catch(err => console.log(err.message));

// promisify
// const { promisify } = require('util');
// import { get } from 'http'
// import { promisify } from 'util'
// function getUsers(isOffline, callback) {
//   setTimeout(() => {
//     const users = ['John', 'Peter', 'Sandy']
//     if (isOffline) {
//       callback(new Error('Anda sedang offline'), null)
//       return  
//     }
//     callback(null, users)
//   }, 3000)
// }

// const getUsersPromise = promisify(getUsers)
// getUsersPromise(true)
//   .then(users => console.log(users))
//   .catch(err => console.log(err.message))

//async await

// async function makeACake(...rawIngredients){

//   try {
//     const ingredients = await collectIngredients(rawIngredients)
//     const dough = await mixIngredients(ingredients)
//     const pouredDough = await pourDough(dough)
//     const cake = await bakeACake(pouredDough)
//     console.log(cake)
//   } catch (error) {
//     console.log(error)
//   }
// }

// async function fetchResourceAndShowObject(url){
//   try {
//     const response = await fetch(url)
//     // const jsonParse = await response.json()
//     const data = await response.text()
//     console.log(data)
//     // console.log(jsonParse)
//   } catch (error) {
//     console.log(error)
//   }
// }

// fetchResourceAndShowObject('https ://jsonplaceholder.typicode.com/users')
//  .then(data => console.log(data))
//  .catch(err => console.log(err))


//Promise.all()

// Promise.all([
//   new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve('promise 1 resolved')
//     }, 2000)
//   }),
//   new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve('promise 2 resolved')
//     }, 3000)
//   }),
//   new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve('promise 3 resolved')
//     }, 5000)
//   })
// ])
// .then(res => console.log(res))
// .catch(err => console.log(err))

// Promise.allSettled()
Promise.allSettled([
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('promise 1 resolved')
    }, 2000)
  }),
  new Promise((resolve, reject) => {
    //error
    setTimeout(() => {
      reject('promise 2 rejected')
    }, 3000)
  }),
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('promise 3 resolved')
    }, 5000)
  }
  ),
])
.then(res => console.log(res))
.catch(err => console.log(err))