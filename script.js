// Menampilkan log tanggal di console browser
console.log("Halaman diakses pada: " + Date());

// Mengambil elemen tanggal dan mengisinya dengan waktu saat ini
let tanggal = new Date();
document.getElementById("tanggal").innerHTML = "Diakses: " + tanggal.toLocaleString('id-ID');

// Untuk menampilkan alert tampil()
function tampil() {
    alert("Hai!! Salam Kenal Lagi Yah!! Nama Saya Imroatus 👋");
}

// Untuk menampilkan alert show()
function show() {
    alert("Hobi saya antara lain menonton film, belajar bahasa pemrograman, bermain game");
}