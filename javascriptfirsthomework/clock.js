let isim = prompt(" Lütfen İsminizi girin: ");
let myName = document.querySelector("#myName");
myName.innerHTML = `${isim}`;


function time() {
  const clock = document.getElementById("zaman");
  const newDate = new Date();
  let second = newDate.getSeconds();
  let minute = newDate.getMinutes();
  let hour = newDate.getHours();

  hour = hour < 10 ? "0" + hour : hour;
  minute = minute < 10 ? "0" + minute : minute;
  second = second < 10 ? "0" + second : second;

  clock.innerHTML = `${hour} : ${minute} : ${second}`;
}
setInterval(() => {
  time();
}, 1000);

var d = new Date();
var gunler = [
  "PAZAR",
  "PAZARTESİ",
  "SALI",
  "ÇARŞAMBA",
  "PERŞEMBE",
  "CUMA",
  "CUMARTESİ",
];
document.getElementById("gun").innerHTML = gunler[d.getDay()];
