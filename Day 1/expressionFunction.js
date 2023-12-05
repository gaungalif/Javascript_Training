const hello = function(nama) {
    console.log(`nama saya ${nama}`)
    console.log(`Nama saya ${nama}`); // string literal
}
hello('titi')

// arrow function

const hello2 = (nama,umur) => console.log(`umur ${nama} adalah ` + umur)

hello2('budi', 22)