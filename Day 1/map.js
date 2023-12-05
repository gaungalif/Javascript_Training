const mobil = new Map();
mobil.set('nama', 'Avanza');

const mobil2 = new Map([
    ['nama', 'Mercedes'],
    [2019, 'tahun'],
    [true, 'hidup']
]);
mobil2.set(Symbol('nama'), 'Kijang');
console.log(mobil2.has('tahun'))
console.log(mobil2.size)