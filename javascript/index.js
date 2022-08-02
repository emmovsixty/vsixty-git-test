// const nilai = 90;
// const presensi = 20;

// const hasil = nilai > 70 && presensi > 50;
// const lulus = hasil;
// document.writeln(lulus);
// console.info(lulus);
// console.warn(lulus);
// console.error(lulus);
// console.debug(lulus);

// const fNama = 'farhan';
// const mNama = 'mualif';
// const lNama = 'suparja';
// const template = `nama : ${fNama} ${mNama} ${lNama}`;
// // document.writeln(template);
// // console.log(template);
// const nilai = 100;

// const template2 = `${template} lulus = ${nilai > 90}`;
// document.writeln(template2);
// console.log(template2);

// const m = `saya
// farhan
// mualif
// dari
// pemalang`;
// document.writeln(m);

// // konversi
// const a = 120;
// const a2 = '120';
// const con = parseInt(a2); // konversi str to integer
// const con1 = parseFloat(a2); // konversi str to float
// const con2 = Number(a2); // konversi str to Number
// const con3 = a.toString(); // konversi int to str
// const sum = a + con;
// document.writeln(`angka ${sum}`);
// document.writeln(`angka ${con3}`);

// const v = NaN;

// cek nan
// document.writeln(`nilai nan pada a adalah ${isNaN('salah')}`);

// array
// const arrKosong = [];
// const value = ['farhan', 'dimas', 'farid', 12, [12, 43, 12, 43]];
// // arrKosong.push(value);
// // arrKosong[2];
// value[1] = 'drajad';
// delete value[3];
// console.table(value);
// document.writeln(value[4]);

// const mahasiswa = {};
// mahasiswa['npm'] = 521041291;
// mahasiswa['nama mahasiswa'] = 'farhan mualif';
// mahasiswa['prodi'] = 'informatika';

// delete mahasiswa['prodi'];
// console.table(mahasiswa);

// const maha = {
//   nama: 'panjul',
//   npm: 5210411219,
//   nilai: 90,
//   umur: 20,
// };
// const nama = prompt('siapa nama anda : ');
// const umur = confirm('apakah umur anda lebih dari 15? ');

// kodisi atau if, else
// if (nama == maha.nama) {
//   if (umur == true) {
//     if (maha.nilai > 50) {
//       document.writeln('anda lolos');
//     } else {
//       document.writeln('anda tidak lolos');
//     }
//   } else {
//     alert('maaf anda belum cukup umur');
//   }
// } else {
//   alert('nama anda tidak tersedia');
//   stop;
// }

// let cok;
// if (cok == undefined) {
//   document.writeln('data kosong');
// } else {
//   document.writeln('data tersedia');
// }

// SWITCH
// const biji = prompt('nilai anda : (A-E)');
// switch (biji) {
//   case 'A':
//     document.writeln('anda lulus');
//     break;
//   case 'B':
//     document.writeln('anda lulus');
//     break;
//   case 'C':
//   case 'D':
//   case 'E':
//     document.writeln('anda tidak lulus');
//     break;
//   default:
//     alert('mungkin anda salah jurusan');
// }

// const tipe = typeof biji;
// document.writeln(tipe);

// typeof
// const a = 13;
// const b = typeof a;
// document.writeln(`tipe data dari a adalah ${b}`);

//  "in" di object
// const person = {
//   firstnama: 'farhan',
//   lastname: 'mualif',
// };

// if ('firstnama' in person) {
//   alert(`hai ${person.firstnama}`);
// } else {
//   alert('nama tidak tersedia');
// }

// const orang = {
//   namadepan: 'pampam',
//   namabelakaang: undefined,
// };

// if ('namabelakaang' in orang) {
//   alert(`hello ${orang.namabelakaang}`);
// } else {
//   alert('tidak ada');
// }

// ternary operator
// const input = prompt('masukan pin : ');
// input == '1234' ? document.writeln('sisa saldo anda = 1209838') : alert('sandi salah');

// nullish coaleching operator
// let angka;
// let satu = angka;
// satu ?? alert('data null');
// document.writeln(`${satu}`);

// optional chaining

// const person = {
//   adress: {
//     country: 'jawa tengah',
//   },
// };

// const data = person?.adress?.country;
// document.writeln(data);

// falsy and truthy
// let dat = '';
// dat ? alert('data true') : alert('data false');

// operator logika non boolean
// const per = {
//   depan: 'farhan',
//   belakang: 'alip',
// };

// const pil = per.depan || per.belakang;
// console.info(pil);
// console.warn(pil);
// console.error(pil);

// perulangan for

// for (let a = 1; a < 10; a++) {
//   document.writeln(`<p>perulangan ke ${a}</p>`);
// }
// for (let c = 0; c < 50; c++) {
//   console.info('anjay mabar');
// }

// perulangan while

// let b = 1;
// while (b <= 10) {
//   document.writeln(`<p>perulangan ke ${b}</p>`);
//   b++;
// }
// let t = 1;
// while (t <= 10) {
//   document.writeln('<p>alhamdulillah</p>');
//   t++;
// }

// perulangan do while loop
// let urut = 1;
// do {
//   document.writeln(`<p>angka urutan ke ${urut} </p>`);
//   urut++;
// } while (urut < 10);

// brean nd continue
// let c = 1;
// while (c < 10) {
//   document.writeln(`<p>angka ke ${c}</p>`);
//   c++;
//   if (c === 6) {
//     break;
//   }
// }

// let count = 1;
// for (count; count < 20; count++) {
//   if (count % 2 === 0) {
//     continue;
//   }
//   document.writeln(`<P>urutan ke ${count}</p>`);
// }

// label
// loopi: for (let i = 0; i < 5; i++) {
//   loopj: for (let j = 0; j < 10; j++) {
//     if (j > 5) {
//       continue loopi;
//     }
//     console.log(`${i}-${j}`);
//   }
// }

// for in
// const sekolah = {
//   nama: 'smk nusantara 1 comal',
//   alamat: 'jalan raya comal no 12',
// };
// for (i in sekolah) {
//   console.log(`${i}: ${sekolah[i]}`);
// }
// const list = ['farhan', 19, 2002];
// for (i in list) {
//   let num = Number(i);
//   console.log(`${num + 1}: ${list[i]}`);
// }

// for of
// const name = [1, 2, 3, 4, 5, 6, 7, 8];
// for (const i of name) {
//   console.log(`nama ${i}`);
// }

// with statement
// const cuy = {
//   nama: 'panjul',
//   umur: 12,
//   hobi: ['makan', 'main', 'game'],
// };
// with (cuy) {
//   console.log(`nama: ${nama}`);
//   console.log(`umur: ${umur}`);
//   console.log(`hobi: ${hobi[0]}`);
// }

// function / method
// function sum() {
//   let con = confirm('umur anda ? ');
//   if (con == true) {
//     document.writeln('hello world');
//     console.log('hai dunia');
//   }
// }
// function tambah(a, b) {
//   const hasil = a + b;
//   return console.log(`${hasil}`), document.writeln(`${hasil}`);
// }

// function data(a) {
//   if (a >= 20) {
//     return console.log('A');
//   } else if (a >= 10) {
//     return console.log('B');
//   }
// }

// sum();
// tambah(10, 10);
// let int = prompt('masukan nilai : ');
// data(int);

// function parameter + return
// function searching(datas, value) {
//   for (dat of datas) {
//     console.log(`${dat}`);
//     if (dat === value) {
//       return true;
//     }
//   }
//   return false;
// }

// data = [1, 2, 3, 4, 5, 6, 7, 8, 6];
// search = 6;
// value = searching(data, search);
// document.writeln(`${value}`);

// optional parameter
// const kali = (a, b) => {
//   c = a * b;
//   return console.log(c);
// };
// kali(10, 10);

// default parameter
// const kurang = (name, umur = 'UNKNOWN') => {
//   console.log(name);
//   console.log(umur);
// };

// kurang('pampam');

// rest parameter
// const sum = (name, ...data) => {
//   let juml = 0;
//   for (const dat of data) {
//     juml += dat;
//     if (juml > 10) {
//       mes = 'anda lulus';
//     } else {
//       mes = 'anda tidak lulus';
//     }
//   }
//   console.log(`${name} is ${juml} and ${mes}`);
// };
// sum('orange', 1, 3, 4, 5, 6, 7);

// function sebagai value
// function sayHello(peo) {
//   document.writeln(`<p>hello ${peo}</p>`);
// }

// let func = sayHello;
// sayHello('dimas');
// func('farhan');

// anonymous function
// let say = (name) => {
//   document.writeln(`hello ${name}`);
// };
// say('cok');

// function di dalam function
// function outer() {
//   function inner(name) {
//     document.writeln(`hello ${name}`);
//   }
//   inner('sudui');
// }
// outer();

// global and local scop
// let anemy = 0;
// function hitMe() {
//   let first = 'farhan';
//   function hitme2() {
//     document.writeln(first);
//   }
//   hitme2();
// }
// hitMe();
// console.log(`${anemy}`);

// recursive function
// function factorialRecursive(hasil) {
//   if (hasil === 1) {
//     return 1;
//   } else {
//     let has = hasil * factorialRecursive(hasil - 1);
//     return has;
//   }
// }
// console.log(factorialRecursive(10));

// function generator
// function* makanan() {
//   yield 'bakwan';
//   yield 'kopi';
//   yield 'rames';
// }
// const data = makanan();
// for (const dat of data) {
//   console.log(dat);
// }

function* ganjil(value) {
  for (i = 0; i <= value; i++) {
    if (i % 2 === 1) {
      yield i;
    }
  }
}
const numbers = ganjil(100);
for (number of numbers) {
  console.log(number);
}
