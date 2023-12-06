// imperative programming
// Imperative Sorting
// let numbers = [4, 2, 7, 1, 9];
// for (let i = 0; i < numbers.length - 1; i++) {
//     for (let j = i + 1; j < numbers.length; j++) {
//         if (numbers[i] > numbers[j]) {
//             // Swap elements
//             let temp = numbers[i];
//             numbers[i] = numbers[j];
//             numbers[j] = temp;
//         }
//     }
// }

// console.log(numbers); // Output: [1, 2, 4, 7, 9]

// declarative programming
// Declarative Sorting
// let num = [4, 2, 7, 1, 9];
// num.sort((a, b) => a - b);
// console.log(num); // Output: [1, 2, 4, 7, 9]

// pure function (salah)
// const hitungLuasLingkaran = (jariJari) => {
//     let PI = 3.14;
//     return PI * jariJari * jariJari;
// }
// console.log(hitungLuasLingkaran(7));
// console.log(hitungLuasLingkaran(7));
// PI = 1000000;
// console.log(hitungLuasLingkaran(7));
// console.log(hitungLuasLingkaran(7));
// console.log(hitungLuasLingkaran(7));
// console.log(hitungLuasLingkaran(7));
// console.log(hitungLuasLingkaran(7));
// console.log(hitungLuasLingkaran(7));
// console.log(hitungLuasLingkaran(7));
// const kucing = {
//     jenis: "anggora"
// }
// const generateKucingWithWeight = (kucing, weight) => {
//     return {...kucing, weight}
//     // kucing.weight = weight
//     // return kucing
// }

// const kucingBaru = generateKucingWithWeight(kucing, 5)
// console.log(kucing)
// console.log(kucingBaru)


// immutability
// const kucing = {
//     jenis: "anggora", 
//     usia: 2
// }

// const kucingBaru = (newUsia, kucing) => {
//     kucing.usia = newUsia
//     return kucing
//     // return {...newUsia, kucing}
// }

// console.log("Before: ", kucing)
// const gantiUsia = kucingBaru(10, kucing)
// console.log("After: ", kucing)
// console.log("New: ", gantiUsia)

// const jenisKucing = [
//     "anggora", 
//     "persia", 
//     "siam",
//     "kampung"
// ]

// const addKucing = (jenis, array ) => {
//     // array.push(jenis)
//     // return array
//     return [...array, jenis]
// }

// console.log("Before: ", jenisKucing)
// const newJenisKucing = addKucing("kucing hutan", jenisKucing)
// console.log("After: ", jenisKucing)
// console.log("New: ", newJenisKucing)

// recursive
// const factorial = (n) => {
//     if (n === 1) return 1
//     return n * factorial(n - 1)
// }

// console.log(factorial(5))

// // high order function
const hello = () => {
    console.log("hello")
}

const say = (callback) => {
    callback()
}

// say(hello)

const sayHello = () => {
    return () => {
        console.log("hello")
    }
}

sayHello()()