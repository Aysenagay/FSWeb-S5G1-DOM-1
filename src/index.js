const siteContent = {
  // BU NESNEYİ DEĞİŞTİRMEYİN
  nav: {
    "nav-item-1": "Servisler",
    "nav-item-2": "Ürünler",
    "nav-item-3": "Vizyon",
    "nav-item-4": "Özellikler",
    "nav-item-5": "Hakkımızda",
    "nav-item-6": "İletişim",
  },
  cta: {
    h1: "Bu DOM Mükemmel",
    button: "Başlayın",
  },
  "ana-içerik": {
    "özellikler-h4": "Özellikler",
    "özellikler-içerik":
      "Özellikler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "hakkımızda-h4": "Hakkında",
    "hakkımızda-içerik":
      "Hakkında içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "servisler-h4": "Servisler",
    "servisler-içeriği":
      "Servisler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "ürünler-h4": "Ürünler",
    "ürünler-içeriği":
      "Ürünler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vizyon-h4": "Vizyon",
    "vizyon-içeriği":
      "Vizyon içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  iletisim: {
    "iletişim-h4": "İletişim",
    adres: "100 numara Bilmem ne sokak Ankara'da bir semt, Türkiye",
    telefon: "+90 (123) 456-7899",
    email: "satis@birsirketsitesi.com.tr",
  },
  footer: {
    copyright: "Copyright Bir Şirket Sitesi 2022",
  },
  images: {
    "logo-img": "http://localhost:9000/img/logo.png",
    "cta-img": "http://localhost:9000/img/cta.png",
    "accent-img": "http://localhost:9000/img/accent.png",
  },
};

console.log("Proje açıldı!");

/* Kodlar Buradan aşağıya */
const navHtml = document.querySelectorAll("nav a");
navHtml[0].textContent = siteContent["nav"]["nav-item-1"];
navHtml[1].textContent = siteContent["nav"]["nav-item-2"];
navHtml[2].textContent = siteContent["nav"]["nav-item-3"];
navHtml[3].textContent = siteContent["nav"]["nav-item-4"];
navHtml[4].textContent = siteContent["nav"]["nav-item-5"];
navHtml[5].textContent = siteContent["nav"]["nav-item-6"];
/*navHtml[0].setAttribute("class", "italic");
navHtml[1].setAttribute("class", "italic");
navHtml[2].setAttribute("class", "italic");
navHtml[3].setAttribute("class", "italic");
navHtml[4].setAttribute("class", "italic");
navHtml[5].setAttribute("class", "italic");*/
navHtml.forEach((item, index) => {
  let j = index + 1;
  item.textContent = siteContent["nav"]["nav-item-" + j];
  item.setAttribute("class", "italic");
});

document.getElementById("logo-img").src = siteContent["images"]["logo-img"];
document.getElementById("cta-img").src = siteContent["images"]["cta-img"];
document.getElementById("middle-img").src = siteContent["images"]["accent-img"];

/*const logo = document.getElementById("logo-img");
logo.setAttribute("src", "http://localhost:9000/img/logo.png%22);

const circularImage = document.getElementById("cta-img");
circularImage.setAttribute("src", "http://localhost:9000/img/cta.png%22);

const middleImage = document.getElementById("middle-img");
middleImage.setAttribute("src", "http://localhost:9000/img/accent.png%22);*/
const yazi = document.querySelector(".cta-text h1");
yazi.textContent = siteContent["cta"]["h1"];
const buton = document.querySelector(".cta-text button");
buton.textContent = siteContent["cta"]["button"];

const ustYazi = document.querySelectorAll(".top-content .text-content");

ustYazi[0].querySelector("h4").textContent =
  siteContent["ana-içerik"]["özellikler-h4"];
ustYazi[0].querySelector("p").textContent =
  siteContent["ana-içerik"]["özellikler-içerik"];
ustYazi[1].querySelector("h4").textContent =
  siteContent["ana-içerik"]["hakkımızda-h4"];
ustYazi[1].querySelector("p").textContent =
  siteContent["ana-içerik"]["hakkımızda-içerik"];

const altYazi = document.querySelectorAll(".bottom-content .text-content");
altYazi[0].querySelector("h4").textContent =
  siteContent["ana-içerik"]["servisler-h4"];
altYazi[0].querySelector("p").textContent =
  siteContent["ana-içerik"]["servisler-içeriği"];
altYazi[1].querySelector("h4").textContent =
  siteContent["ana-içerik"]["ürünler-h4"];
altYazi[1].querySelector("p").textContent =
  siteContent["ana-içerik"]["ürünler-içeriği"];
altYazi[2].querySelector("h4").textContent =
  siteContent["ana-içerik"]["vizyon-h4"];
altYazi[2].querySelector("p").textContent =
  siteContent["ana-içerik"]["vizyon-içeriği"];

const iletisimBaslik = document.querySelector(".contact");
iletisimBaslik.querySelector("h4").textContent =
  siteContent["iletisim"]["iletişim-h4"];
const iletisimParagrafi = document.querySelectorAll(".contact p");
iletisimParagrafi[0].textContent = siteContent["iletisim"]["adres"];
iletisimParagrafi[1].textContent = siteContent["iletisim"]["telefon"];
iletisimParagrafi[2].textContent = siteContent["iletisim"]["email"];
