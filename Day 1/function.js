const nilai = 5

function penjumlahan(...angka){
    let hasil = 0
    for(let i = 0; i < angka.length; i++){
        hasil += angka[i]
    }
    return hasil
}

const hasil = penjumlahan(5,10,3)
console.log(hasil, hasil+nilai)