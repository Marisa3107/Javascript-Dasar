let dataString = "data string";
console.log(dataString);

// 1.  escaping string (\' \" \\ \n \r \t \b \f)
let data1 = 'chirow \tberkata "apa kabar dunia?"' 
console.log(data1);
let data2 = "ucup berkata \"anyeong chingu\"";
console.log(data2);
let data3 = "chirroww berjalan-jalan di tepi jurang, \nkerennn";
console.log(data3);

// 2. literal string (template literal string)
let namaDepan ="chirroww";
let namaBelakang = "Al Xen"
let umur = 15;
let namaLengkap = umur + " " + namaDepan + " " + namaBelakang;
console.log(namaLengkap);

// lebih elegghhan supaya tidak error
let biodata = `${namaDepan} ${namaBelakang} dengan umur ${umur}`;
console.log(biodata);
