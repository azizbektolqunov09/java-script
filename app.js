// // 'use strict';  //xato qilishni oldini oladi

// // // alert("Salom dunyo");
// // // alert("Mening ismim isca");

// // let ism = 'Isca';
// // // qanday = "uzb" bu xato 
// // console.log(typeof ism);

// // let mosh = 17;
// // mosh = 17;
// // console.log(mosh);

// // let familya = true;
// // console.log(typeof familya);

// // const age = 20;     // const - constanta yani ozgarmas
// // console.log(age);

// // let uzb;
// // console.log(uzb);



// // let itachi = 'madara';
// // let suv = 'mancey';
// // console.log(itachi, suv);

// // // itachi = 'aziz';
// // // console.log(itachi)
// // var sakura = "kakashi";
// // var sasuke = "naruto";
// // console.log(sasuke);


// // let sukuna = "itadori";
// // let hashirama = "gojo";
// // console.log(hashirama);


// // let iscaChi = null;
// // console.log(iscaChi);

// // let isca = Symbol('Hello world');
// // console.log(isca);


// // let hello = {     //  object
// //     odam: 'aziz',
// //     yosh: 20,
// //     talaba: true
// // };
// // console.log(hello.odam);
// // console.log(hello.yosh);

// // let bro = 24;
// // console.log(bro);
// // console.log(String(bro));    //  String qoshish bir malumot turini boshqa malumot turiga ozgartirish deyiladi

// // console.log("Men" +  2009  + "chi yilda tavvalud topganman");             // coishen yuzaga kelib son malumot turin stringga korinishiga ozgardi



// // console.log("30" - "10" - 5);// - bolsa number malumot turiga aylanarkan 

// // let a =10, b = 10;
// // console.log(a + b);
// // console.log(a - b);
// // console.log(a * b);
// // console.log(a / b);
// // console.log(a % b);
// // console.log(a ++);



// let c = 10;
// console.log(c > 5);     //true



// let bosh = 20;

// if (bosh >= 18 && bosh <= 30) {
//     console.log("Kirish mumkin");
// };



// function meningFunksiyam(son1, son2, operators) {   
//     if (operators === "+") {
//         return son1 + son2
//     } else if (operators === "-") {
//         return son1 - son2;
//     } else if (operators === "*") {
//         return son1 * son
//     } else if (operators === "/") {
//         return son1 / son2
//     }
// };

// const calc = meningFunksiyam(10000000000, 12, "+")  //const kalit sozi


// const ayru = meningFunksiyam(5, 12, "-")

// console.log(calc);  // ishlamaydi  return shu yerda 
// // function funksiya yaratish meningFunksiyam bu ufunksiyani nomi ,
// //  return natijani funksuyadan tashgqariga qaytaradi,  
// // son1 va son2 bular parametrlar ularga xali qiymat berilamgan , 
// // {} buni ichida funksiya bajaradigan ish yoziladi


// //
// // function salom(ism) {
// //     console.log("Salom " + ism);        keremas
// // }
// // salom("Aziz");


// // function addDigits(num) {
// //     let sum = 6;

// //     while (num > 0) ;


// // }

// // let son = 5;

// // while (son > 0) {    //shart rost ekan, qayta-qayta bajar yani 0 dan 5 gacha bolgan sonlarni hammasini korsatadi
// //     console.log(son);
// //     son--;
// // }



// let son = 1;

// while (son <= 5) {       //while truni ekranga chiqaradi  true bo‘lsa, ichidagi kodni takrorlaydi.
//     console.log(son);
//     son++;      //son++ 1 ta qoshish degani                                  pop push else if return function slice splice 

// };
// console.log(son);



// let yosh = 20;

// if (yosh >= 19) {
//     console.log("Kirish mumkin");
//     console.log(yosh);
// };


// // const familya = 17;

// // // familya = 20

// // const blabla = () => {
// //     familya = 10
// // }
// // blabla()

// // console.log(familya);


// let qosh = 20;

// if (qosh >= 18) {    //  if agar
//     console.log("Kirish mumkin");
// } else {
//     console.log("Kirish mumkin emas");
// };




// // if (yomgir) {
// //     console.log("Soyabon ol");
// // } else {
// //     console.log("Soyabon olma");
// // };



// //arrry bir nechta malumotlarni bir joyda saqlash
// let mevalar = ["olma", "banan", "anor",];
// mevalar.push("nok");                //push oxiriga qiymat qoshadi
// // mevalar.pop();                     //pop oxiridan bita ochiradi
// mevalar.unshift("olcha");
// console.log(mevalar[0]);
// console.log(mevalar[1]);
// console.log(mevalar[2]);
// console.log(mevalar[3]);
// console.log(mevalar[4]);
// // console.log(mevalar);



// let meva = ["olma", "banan", "anor", "uzum"];

// let yangi = meva.slice(1, 3);  //consolda banan va anor chiqadi 

// console.log(yangi);


// // //spilice bular

// let shirin = ["olma", "banan", "anor"];

// let shirinroqtoplam = shirin.slice(1, 2);               //banani olib tashladi 
// console.log(shirinroqtoplam);


// //////////////////////////////////////////////


// let chevalar = ["olma", "anor"];

// chevalar.splice(1, 0, "banan");

// console.log(chevalar);
// //

// let salom = ["bahor", "yoz", "kuz", "qish"];

// for (let i=0; i < salom.length; i++) {
//     console.log(salom[i]);
// }

// // let sonlar =[1, 2, 3, 4, 5,];
// // let maymunlar = sonlar.map((som)  {
// //     return som * 2;

// // });

// // console.log(maymunlar)


// // function isOddDate() {
// //     let date = new Date();

// //     if (date.getDay % 2 === 0) {
// //         return true
// //     }

// //     return false;
// // }

// // let value = isOddDate();

// // let array = ["Ali", 1, "Vali", true, 4];
// // [2, ]

// // let dunyo = array.map(function (el) {
// //     if (el === "Vali") {
// //         return el 
// //     } else {
// //         return 2;
// //     }
// // })

// // console.log(dunyo);



// //json menga {}  ichida property va uni qiymatini chiqarib beryapti

// let odam = {
//    hayvon: "bori",
// };

// let json = JSON.stringify(odam);

// console.log(json);


// //optional chaining

// let odamcha = {
//     hello: "Hello",
//     good: 2,
// };

// console.log(odamcha.isca?.hello);


// //spread ...             

// let soncha = [1, 2, 3];
// let harif = ["bir", "ikki"];

// let qiymat = [...soncha, ...harif];

// console.log(qiymat);

// //rest ...

// function yigadi(a, b, ...sonalar) {
//     console.log(sonalar)
// }

// yigadi(10, 20, 30, 40,);


// //destructuring  //uzun kodlarni qisqartirish usuli


// let odamcha2 = {
//     ismismcha: "Aziz",
//     familyacha: "Tolqunov"
// };

// let { ismismcha, familyacha} = odamcha2;
// console.log(ismismcha);
// console.log(familyacha);



// //OBJECT dan malumot olish 
// // console.log(qiymati propertiysi . qiymati)



// //object keys        faqat qiymatini korsatadi

// let insonlar = {
//     parranda: "Tovu",
//     yovvoyi: "Ayiq",
//     ikkalasiniYoshi: 2,
// }


// console.log(Object.keys(insonlar))



// // object,values()   faqat propertni beradi

// let insonlar2 = {
//     parranda: "Tovu",
//     yovvoyi: "Ayiq",
//     ikkalasiniYoshi: 2,
// }

// console.log(Object.values(insonlar2))

// //object.entries  property va qiymatlarinini birga beradi

// let insonlar3 = {
//     parranda: "Tovu",
//     yovvoyi: "Ayiq",
//     ikkalasiniYoshi: 2,
// }

// console.log(Object.entries(insonlar3))



// //nested object     ichma ich object

// let insonlar4 = {
//     ism: "aziz",
//     familya: "tolqunov",
//     yosh: 17,

//     manzil: {
//         shaxar: "toshkent",
//         uy: 52,
//     }
// };

// console.log(insonlar4.manzil.shaxar);




// let sayyoralar = ["saturn", "venera", "neptun", "yupiter"];

// let sayyorlarNi = sayyoralar.map(function(qor) {
//        return "Salom " + "qor";

// }) ;

// console.log(sayyorlarNi);


// // filter berilgan kattalik ga qarab bergilaydi javobni

// let sonlar1 = [1 ,2, 3, 4, 5, 6, 7, 8, 9, "boy", "moy"];

// // sonlar1[0] = '2'

// let kattalik = sonlar1.filter(function(element) {
//     return typeof element === "string";
// });

// console.log(kattalik);



// // // reduce  kop elementlarni biita natijaga aylantiradi

// let sonlar = [1, 2, 3, 4, 5];

// let jami = sonlar.reduce(function(yigindi, son) {
//     return yigindi + son;
// }, 0);

// console.log(jami);

// // //find shartga mos kelgan elementni topadi




// let ismlar = ["Ali", "Vali", "Sardor"];

// ismlar.forEach(function(ism, arry, salom) {
//     console.log(ism,arry,salom);
// });

// //boshqa
// let mushuk = "Sunat";
// let it = "Soliboyev";

// let fullName = mushuk + ' ' + it;

// console.log(fullName)

// //boshqa 
// // document bu html eshigi//
// // # id degani // . class degani //teg bolsa h1
// // let title = document.querySelector("#title");         //document hTML sahifa / / querySelector HTML dan birinchi mos keladigan elementni top didi //    
// // // console.log(title.textContent);                                    //testContextni yozsa Yangi Salom chiqadi
// // title.textContent = "Yangi Salom";                        //textContent  HTML dagi titlni, matinni  ozgartiradi
// // // title.innerHTML = `<b>Salom Dunyooo</b>`;               //innerHTML orali htmlga kod yozish mumkin  yani taglar qoshish mumkin
// // console.log(title.textContent)

// //boshqa
// let p = document.createElement("p");              //  createElement()  java script yordamida yangi htmlga element yarat deydi 
// p.textContent = "salommmmmm";
// document.body.append(p);                           //append p ni body ni ichiga kod sifatida qosh degani HTMLga 
// console.log(p.textContent)

// //boshqa
// // // keyinchalik
// let title = document.querySelector("#title");
// let bTag = document.createElement('b');
// bTag.textContent= 'maniu textim';
// title.appendChild(bTag);
// console.log(title.textContent)

// let container = document.querySelector("#container");         
// // let p = document.createElement("p");                   
// // p.textContent = "Men JavaScript orqali yaratdim";                    
// // container.append(p);
// console.log(p.textContent);

// let title = document.querySelector("#title")
// title.classList.add("red")
// console.log(title.classList);

// // Eventy hodisa
// let btn = document.querySelector("#btn");           //document bu index.html 
// btn.addEventListener("click", function() {         //addEventListener  bu holatni kuzatadi yani click bosilganida function ishga tushadi tugma bosildi did
//     console.log("Tugma bosildi");
// });

// let link = document.querySelector("#link");

// link.addEventListener("click", myFunction);

// function myFunction(event) {
//     event.preventDefault();                  // preventDefault() //→ brauzerning odatiy ishini to‘xtatadi
//     console.log("Link bosildi, lekin saytga o'tmadik");
// }

// // let select = document.querySelector("#btn");

// // console.log(select); // {}
// // console.log(btn); // {[{}]}


// k// btn[0,1].addEventListener("click", myFunction);

// // let btn = document.querySelectorAll("button");


// // function myFunction() {
// //     for (let i = 0; i <= btn.length; i++) {
// //         btn[i].addEventListener("click", (e)=>{
// //             e.preventDefault()
// //             console.log("adfwewe");

// //         })
// //     }
// // }

// // myFunction()

//boshqa
// Callback — boshqa funksiyaga berilgan funksiya.

// function salom() {
//     console.log("Salom  Hayir");
// }
// function bajar(funksiya) {
//     funksiya();

// }

// bajar(salom);

//boshqa. 
// Promise — kelajakda natija kelishini va'da qiluvchi obyekt.

const vada = new Promise((resolve, reject) => {
    let pul = true;
    if (pul) {
        resolve("Buyurtma tayyor");                   //resolve ish muvofaqaiyalti boldi
    } else {
        reject("Pul yetarli emas");                        //reject ish muvofaqaiyatsiz boldi   degani
    }
});
vada
    .then(function(natija) {
        console.log(natija);
    })
    .catch(function(xato) {
        console.log(xato);
    });


//boshqa
//fetch() serverga HTTP request yuboradi

// fetch("https://jsonplaceholder.typicode.com/users", {              
//     method: "GET", 
//     headers: {
//         "Content-Type": "application/json"
//     }
// })
//     .then((res) => {
//         return res.json()
//     })
//     .then(users => {
//         console.log(users)
//     })


//boshqa          siyn hron va async hron  

async function ustozniBackenddanOlish() {

 // ustozni ma'lumotlarini backenddan olish
}

async function test() {
    console.log('Hello');
    const ustoz1 = await ustozniBackenddanOlish("7");
    const oquvchilar = await ustozniBackenddanOquvOlish(ustozni.ismi);
    return oquvchilar;
}


// //boshqa
// console.log("A");
// setTimeout(() => {
//     console.log("B");
// }, 12000);
// console.log("C");

// //boshqa
// console.log(1);
// setTimeout(() => {                           //menga 8000 degani 8 soniyada menga malumot keladi 
//     console.log(3);
// }, 8000);
// console.log(2);


//boshqa
// fetch("https://jsonplaceholder.typicode.com/users")
//     .then(response => response.json())         //response.json()   Serverdan kelgan body'ni JSONdan JavaScript ma'lumotiga aylantir
//     .then(data => console.log(data));

//boshqa

async function getUsers() {

    try {                             // try — xato chiqishi mumkin bo‘lgan kodni sinab ko‘rish uchun ishlatiladi.            // "Shu kodni bajarib ko‘r"

        const response = await fetch(                              //fetchdan kelgan malumotlarni saqlab turadigan paket
            "https://jsonplaceholder.typicode.com/users"
        );

        const data = await response.json();                     //data haqiyqiy users malumotlarini saqlab turadi
        console.log("Loading...")

        setTimeout(() => {
            console.log(data)
            
        }, 5000);
        
    } catch (error) {

        console.log("Xato:", error);
    }

}
getUsers()
//boshqa

import { qoshish } from "./math.js";
console.log(qoshish(10, 20));

