class Pegawai {
  #gajiPokok;

  constructor(nama, gajiPokokAwal) {
    this.nama = nama;
    this.#gajiPokok = gajiPokokAwal;
  }

  lihatGajiPokok() {
    return this.#gajiPokok;
  }

  ubahGajiPokok(nominalBaru) {
    if (nominalBaru <= 0) {
      console.log("Gagal: Gaji tidak valid!");
    } else {
      this.#gajiPokok = nominalBaru;
    }
  }

  #hitungPotonganPajak() {
    return this.#gajiPokok * 0.05;
  }

  hitungGajiBersih() {
    let potonganPajak = this.#hitungPotonganPajak();
    return this.#gajiPokok - potonganPajak;
  }

  infoKerja() {
    return `${this.nama} sedang bekerja di kantor.`;
  }
}

class Programmer extends Pegawai {
  constructor(nama, gajiPokokAwal, bahasaPemrograman) {
    super(nama, gajiPokokAwal);
    this.bahasaPemrograman = bahasaPemrograman;
  }

  infoKerja() {
    return `${this.nama} sedang menulis kode menggunakan ${this.bahasaPemrograman}.`;
  }
}

class Designer extends Pegawai {
  constructor(nama, gajiPokokAwal, toolsDesain) {
    super(nama, gajiPokokAwal);
    this.toolsDesain = toolsDesain;
  }

  infoKerja() {
    return `${this.nama} sedang merancang antarmuka menggunakan ${this.toolsDesain}.`;
  }
}

// ==========================================
// PENGUJIAN PROGRAM (JANGAN UBAH BAGIAN INI)
// ==========================================
const dev1 = new Programmer("Andi", 10000000, "JavaScript");
const ui1 = new Designer("Siti", 8000000, "Figma");

console.log(dev1.infoKerja());
console.log(`Gaji Bersih ${dev1.nama}: Rp${dev1.hitungGajiBersih()}`);

console.log(ui1.infoKerja());
ui1.ubahGajiPokok(-5000);   // Harus ditolak karena bernilai negatif
ui1.ubahGajiPokok(9000000); // Berhasil menaikkan gaji pokok
console.log(`Gaji Bersih ${ui1.nama} setelah naik: Rp${ui1.hitungGajiBersih()}`);