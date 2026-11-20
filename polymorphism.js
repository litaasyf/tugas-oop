class Notifikasi {
  kirim(pesan) {
    console.log("Notif umum: " + pesan);
  }
}

class NotifikasiEmail extends Notifikasi {
  kirim(pesan) {
    console.log("[Email] Kirim pesan: " + pesan);
  }
}

class NotifikasiWhatsApp extends Notifikasi {
  kirim(pesan) {
    console.log("[WhatsApp] Kirim pesan: " + pesan);
  }
}

let notifEmail = new NotifikasiEmail();
let notifWA = new NotifikasiWhatsApp();

notifEmail.kirim("Tugas sudah dinilai.");
notifWA.kirim("Ada jadwal kelas tambahan besok.");