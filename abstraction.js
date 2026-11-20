class MesinKopi {
  constructor(jenisKopi) {
    this.jenisKopi = jenisKopi;
  }

  #panaskanAir() {
    console.log("manasin air...");
  }

  #gilingKopi() {
    console.log("giling kopi " + this.jenisKopi);
  }
  
  buatKopi() {
    this.#panaskanAir();
    this.#gilingKopi();
    console.log("kopi jadi!");
  }
}

let mesinKopi = new MesinKopi("kapal api");
mesinKopi.buatKopi();