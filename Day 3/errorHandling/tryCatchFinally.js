// try{
//     console.log("Hello")
//     // const errorNih = null
//     errorNih()
//     console.log("masuk sini")
// } catch (error) {
//     console.log(`Error: (${error.message})`)
// }

// try {
//     console.log("Awal blok try");   // (1)
//     errorCode;                      // (2)
//     console.log("Akhir blok try");  // (3)
// } catch (error) {
//     console.log(error.name);
//     console.log(error.message);
//     console.log(error.stack);
// }

// finally
try {
    console.log("Awal blok try")
    // errorlagi
    console.log("Akhir blok try")
    // errorlagilagi
} catch (error) {
    console.log("ERROR PAK")
} finally {
    console.log("Akan tetap dieksekusi")
}