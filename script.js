//*Sayfa yüklendiğinde çalışması
window.addEventListener("load", run);

function run(e) {
  console.log("Sayfanız yüklenmiştir.");
}

//* Tıklayarak renk değiştirmek

const currency = document.querySelector(".currency-value");
currency.addEventListener("click", rund);

function rund(e) {
  currency.style.color = "#FF06B7";
  console.log("rengi değiştirildi.");
}

//*BUTONLARA MESAJ EKLEME

const buttons = document.querySelector(".home-btn-right");

buttons.addEventListener("click", runner);

function runner(event) {
  alert("rightt gidiyoruz.");
}



//* A ETİKETİ OLUŞTURUP BUTONA ÇEVİRME

const text = document.createElement("a");

text.href = "#";
text.className = "home-btn-left";
text.innerHTML = "Learn More";
text.classList.add("main-button");
document.querySelector(".section-right-text").appendChild(text);

text.style.textDecoration="none";
text.style.color="#fff";
text.style.backgroundColor="#FF06B7";


//? Wallet Buttonları oluşturma (PİNK)


const walletPink = document.querySelector(".wallet-text");
const walletBtn = document.createElement("a");
walletBtn.href = "#";
walletBtn.className = "btn btn-custom ms-3";
walletBtn.innerHTML="Play Store";
walletBtn.classList.add("wallet-btn-pink");

walletPink.appendChild(walletBtn);


//?WALLET BUTTON MOR

const walletMor = document.createElement("a");

walletMor.href = "#";
walletMor.className ="wallet-btn-mor";
walletMor.innerHTML="App Store";
walletMor.id ="wallet-btn-id";

document.querySelector(".wallet-text").appendChild(walletMor);

walletMor.style.textDecoration="none";
walletMor.style.color="#fff";
walletMor.style.backgroundColor="#AB46D2";




//******************************************************************* */



