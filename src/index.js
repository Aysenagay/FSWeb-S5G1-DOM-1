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
