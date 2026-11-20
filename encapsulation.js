class DompetDigital {
  #pin;
  #saldo;

  constructor(namaPemilik, pinAwal, saldoAwal) {
    this.namaPemilik = namaPemilik;
    this.#pin = pinAwal;
    this.#saldo = saldoAwal;
  }

  tarikSaldo(inputPin, nominal) {
    if (inputPin !== this.#pin) {
      console.log("PIN salah!");
      return;
    }

    if (nominal > this.#saldo) {
      console.log("Saldo kurang!");
      return;
    }

    this.#saldo = this.#saldo - nominal;
    console.log("Berhasil tarik saldo. Sisa saldo " + this.namaPemilik + ": " + this.#saldo);
  }
}

let dompetChopper = new DompetDigital("Chopper", "1234", 500000);
dompetChopper.tarikSaldo("0000", 50000);
dompetChopper.tarikSaldo("1234", 700000);
dompetChopper.tarikSaldo("1234", 150000);
