// contoh if
let umur1 = 20;
if (umur1 >= 17 ) {
    console.log("Hallo, Selamat Siang")
} 

//Contoh if else
let umur = 20;
if (umur >= 17) {
    console.log("Silahkan Masuk")
} else {
    console.log("Kamu belum cukup umur")
}

// Nested if
let ipk = 3.9
if (ipk >= 3.0 && ipk <=4.0) {
    if (ipk > 3.8) {
        console.log("Ajarin dong puh")
    } else {
        console.log("Ipk kamu bagus");
    }
} else if (ipk < 3.0) {
    console.log("Kamu perlu belajar sama sepuh!!!")
} else {
    console.log("Kelebihan bang")
}

//Switch Case
let nama1 = 'Zayn';
switch(nama1) {
    case 'Iqbal':
    case 'Arieftian':
    case 'Maulana':
        console.log(`${nama1} ada dalam daftat`);
        break;
    default:
        console.log(`${nama1} tidak ada dalam daftar.`);
        break;
}

//for statement memanpilkan bilangan genap dan mengelurakanya dengan push
let angka = [1,2,3,4,5,6,7,8,9,10]
let genap = []
for(let i = 0; i < angka.length; i++){
    if(angka[i] % 2 == 0 ){
    genap.push(angka[i]);
    }
}console.log(`${genap} adalah bilangan genap`);

//While, menampilkan bilangan 1 sampai 5
let bilangan = 0
while (bilangan < 5) {
    bilangan++;
    console.log(`ini bilangan ke ${bilangan}`);
}

//do while menampilkan bilangan 6 sampai 10
let bilangan1 = 5;
do {
  bilangan1 += 1;
  console.log(`ini bilangan ke ${bilangan1}`);
} while (bilangan1 < 10);

//function membuat pola segitiga siku dengan string = 'iqbal'
function segitiga(panjang) {
    let hasil = '';
    for (let i = 0; i < panjang; i++) {
        for (let j = 0; j <= i; j++) {
            hasil += 'Iqbal ';
        }
        hasil += '\n';
    }
    return hasil;
}
console.log(segitiga(5));