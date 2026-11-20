class User {
  constructor(username) {
    this.username = username;
  }

  login() {
    console.log(this.username + " berhasil login.");
  }
}

class Admin extends User {
  constructor(username, levelAkses) {
    super(username); 
    this.levelAkses = levelAkses;
  }

  hapusUser(namaUser) {
    console.log("Admin " + this.username + " (" + this.levelAkses + ") menghapus user " + namaUser);
  }
}

let adminUtama = new Admin("Light Yagami", "superadmin");
adminUtama.login();
adminUtama.hapusUser("LAwLiet142");