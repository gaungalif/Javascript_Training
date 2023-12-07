class RekeningBank {
    constructor(nomorRekening, pemilik, saldo = 0) {
        this.nomorRekening = nomorRekening;
        this.pemilik = pemilik;
        this.saldo = saldo;
    }

    setoran(jumlah) {
        if (jumlah > 0) {
            this.saldo += jumlah;
            console.log(`Setoran berhasil. Saldo saat ini: ${this.saldo}`);
        } else {
            console.log("Jumlah setoran harus lebih besar dari 0.");
        }
    }

    penarikan(jumlah) {
        if (0 < jumlah && jumlah <= this.saldo) {
            this.saldo -= jumlah;
            console.log(`Penarikan berhasil. Saldo saat ini: ${this.saldo}`);
        } else {
            console.log("Jumlah penarikan tidak valid atau saldo tidak mencukupi.");
        }
    }

    cekSaldo() {
        console.log(`Saldo pada rekening ${this.nomorRekening}: ${this.saldo}`);
    }
}

class Nasabah {
    constructor(nama, alamat, nomorTelepon) {
        this.nama = nama;
        this.alamat = alamat;
        this.nomorTelepon = nomorTelepon;
        this.rekening = null;
    }

    buatRekening(nomorRekening, saldoAwal = 0) {
        if (!this.rekening) {
            this.rekening = new RekeningBank(nomorRekening, this.nama, saldoAwal);
            console.log(`Rekening ${nomorRekening} berhasil dibuat untuk ${this.nama}.`);
        } else {
            console.log("Anda sudah memiliki rekening.");
        }
    }

    informasiNasabah() {
        console.log(`Informasi Nasabah - ${this.nama}`);
        console.log(`Alamat: ${this.alamat}`);
        console.log(`Nomor Telepon: ${this.nomorTelepon}`);
        if (this.rekening) {
            console.log(`Rekening: ${this.rekening.nomorRekening}`);
            this.rekening.cekSaldo();
        } else {
            console.log("Nasabah belum memiliki rekening.");
        }
    }
}


// Contoh penggunaan:
// Membuat objek nasabah
const nasabah1 = new Nasabah("Alice", "Jalan ABC No. 123", "081234567890");

// Membuat rekening untuk nasabah
nasabah1.buatRekening("123456", 1000);

// Melakukan setoran dan penarikan
nasabah1.rekening.setoran(500);
nasabah1.rekening.penarikan(200);

// Menampilkan informasi nasabah
nasabah1.informasiNasabah();
