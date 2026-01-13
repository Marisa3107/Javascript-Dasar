// 1.variabel dengan let

let nama = "Chirrow Xenn";

// tampilkan data
console.log(nama);

// ubah nilai variabel nama
nama = "Xenn Al";
console.log(nama);

// 2.variabel dengan var
var namaDepan = "Chirrow";
console.log(namaDepan);
namaDepan = "Xenn";
console.log(namaDepan);

//kelakukan dari var
let namaBelakang = "Xenn";
{
        let namaBelakang = "Al";
        console.log(namaBelakang);
}
console.log(namaBelakang);

// kelakukan dari var
var namaTengah = "kwerenn";
{
    var namaTengah = "Boamm";
    console.log(namaTengah);
}
console.log(namaTengah);

// kasus khusus
warna = "Biru-biru";
{
    warna = "Hitam";
}
console.log(warna);

// 3.const

const TTL = "06 Juli 2010";
console.log(TTL);
// TTL = "24 Juli 2020"; tidak boleh dilakukan karena sudah janji konstan
