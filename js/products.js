var nameArray = [];
nameArray[0] = "";
var list1 = ["product1", "product2", "product3", "product4"];
var list2 = ["product5", "product6", "product7", "product8"];
window.onload = function () {
  var url = document.location.href;
  params = url.split("?")[1];
  params = url.split("=")[1];

  params1 = url.split("=")[1];
  if (params1 != null) {
    document.getElementById('logout').style.visibility = 'visibile'
    params1 = url.split("=")[1].split("-");
    nameArray[0] = params1[0] + "-" + params1[1];
    document.getElementById("account").innerHTML =
      `
    <h1>Hoşgeldiniz</h1> <br>
  ` +
      `<h2>` +
      params1[0].charAt(0).toUpperCase() +
      params1[0].slice(1) +
      " " +
      params1[1].charAt(0).toUpperCase() +
      params1[1].slice(1) +
      `</h2>`;
  } else {
    document.getElementById('logout').style.visibility = 'hidden'
    document.getElementById("account").innerHTML = `
    <a href="formgiris.html">
          <h1>Giriş Yap</h1>
        </a>`;
  }
  list1.forEach((product, i) => {
    document.querySelector("#products").innerHTML += `
    <div class="block">
                    <div class="urun">
                          <img
                          src=""
                          id=${product + "photo"}
                        />
                        <div class="buton">
                            <a class="satin-al" onclick="getProduct('${product}');">Sepete Ekle</a>
                        </div>
                    </div>
                 
                    <div class="bilgi">
                        <h4 id=${product}></h4>
                        <span class="aciklama"id=${product + "attribute"}>
                            
                        </span>
                        <span class="fiyat" id=${product + "price"}></span>
                        <a style="cursor: pointer" class="satin-al_s" onclick="getProduct('${product}');">Satın Al</a>
                    </div>
    </div>
        
    `;
    document.getElementById(product).innerHTML = obj.id[i].name;
    document.getElementById(product + "price").innerHTML = obj.id[i].price;
    document.getElementById(product + "photo").src = obj.id[i].photo;
  });
  list2.forEach((product, i) => {
    document.querySelector("#products").innerHTML += `
    <div class="block">
                    <div class="urun">
                          <img
                          src=""
                          id=${product + "photo"}
                        />
                        <div class="buton">
                            <a class="satin-al" onclick="getProduct('${product}');">Sepete Ekle</a>
                        </div>
                    </div>
                 
                    <div class="bilgi">
                        <h4 id=${product}></h4>
                        <span class="aciklama"id=${product + "attribute"}>
                            
                        </span>
                        <span class="fiyat" id=${product + "price"}></span>
                        <a style="cursor: pointer" class="satin-al_s" onclick="getProduct('${product}');">Satın Al</a>
                    </div>
    </div>
    
                    
    `;
    document.getElementById(product).innerHTML = obj.id[i + 4].name;
    document.getElementById(product + "price").innerHTML = obj.id[i + 4].price;
    document.getElementById(product + "photo").src = obj.id[i + 4].photo;
  });
};
function getIndex(index) {
  if (nameArray != "")
    url = `./${index}.html?name=` + encodeURIComponent(nameArray[0]);
  else url = `./${index}.html`;
  document.location.href = url;
}
function getCategory(name) {
  var b = name;
  if (name != "galeri")
    var url =
      "./shop.html?name=" +
      encodeURIComponent(nameArray[0]) +
      "=" +
      encodeURIComponent(b);
  else
    var url =
      "./galeri.html?name=" +
      encodeURIComponent(nameArray[0]) +
      "=" +
      encodeURIComponent(b);

  document.location.href = url;
}
function getProduct(name) {
  var b = document.getElementById(name).innerText,
    url =
      "./single-product.html?name=" +
      encodeURIComponent(nameArray[0]) +
      "=" +
      encodeURIComponent(b);

  document.location.href = url;
}
const obj = {
  id: [
    {
      name: "Lenovo Ideapad Gaming 3",
      categoryName: "Bilgisayar - Tablet",
      price: "11.999,00 TL",
      photo: "./img/item1.jpg",
      attribute:
        "Notebook İşlemci Modeli:	Ryzen 7 5800H <br> GPU Model:	GeForce RTX 3060 <br> Ram Kapasitesi:	16GB <br> Ekran Boyutu:	15.6 <br> İşletim Sistemi	FreeDos",
    },
    {
      name: "Casper Excalibur G770",
      categoryName: "Bilgisayar - Tablet",
      price: "13.499,00 TL",
      photo: "./img/item2.jpg",
      attribute:
        "Ekran Boyutu: 15,6 inç <br> Ekran Kartı: Nvidia GeForce RTX 3050 Ti <br> Harddisk Kapasitesi:Yok <br> İşletim Sistemi Windows 11 Home <br> İşlemci: 11400H <br> İşlemci Tipi: Intel Core i5 <br> Ram (Sistem Belleği): 8 GB <br> Ekran Kartı Hafızası: 4 GB",
    },

    {
      name: "Grundig GWM 91014 A",
      categoryName: "Beyaz Esya",
      price: "6.188,00 TL",
      photo: "./img/item17.jpg",
      attribute:
        "Genişlik (cm): 60 <br> Yükseklik (cm): 84 <br> Derinlik (cm): 64 <br> Kurutmalı: Hayır <br> Maksimum Devir Hızı: 1000 <br> Yıkama Kapasitesi: 9 kg",
    },
    {
      name: "Samsung RT46K6000WW",
      categoryName: "Beyaz Esya",
      price: "7.398,01 TL",
      photo: "./img/item18.jpg",
      attribute:
        "Yükseklik (cm): 182.5 <br> Yıllık Enerji Tüketimi (kWh): 323 <br> Ürün Tipi: Çift Kapılı <br> Hacim (L): 468 <br> Ses Seviyesi (dB): 41 <br> Derinlik (cm): 72.6 <br> Genişlik (cm): 70 <br> Dondurucu Özelliği: No Frost <br> Kullanım Şekli: Solo",
    },

    {
      name: "iPhone 11 128 GB",
      categoryName: "Telefon",
      price: "12.799,00 TL",
      photo: "./img/item9.jpg",
      attribute:
        "Dahili Hafıza: 128 GB <br> Ekran Boyutu: 6,1 inç <br> RAM Kapasitesi: 4 GB RAM <br> Ön (Selfie) Kamera: 12 MP <br> Pil Gücü: 3110 mAh <br> Kamera Çözünürlüğü: 12 MP + 12 MP",
    },
    {
      name: "Samsung Galaxy S21 Plus 5G",
      categoryName: "Telefon",
      price: "11.399,05 TL",
      photo: "./img/item10.jpg",
      attribute:
        "Dahili Hafıza: 256 GB <br> Ekran Boyutu: 6,7 inç <br> RAM Kapasitesi: 8 GB RAM <br> Ön (Selfie) Kamera: 10 MP <br> Pil Gücü: 4800 mAh <br> Kamera Çözünürlüğü: 12 MP + 64 MP +12 MP",
    },

    {
      name: "Roborock S5 Max Vacuum Cleaner",
      categoryName: "Elektrikli Ev Aletleri",
      price: "6.699,00 TL",
      photo: "./img/item25.jpg",
      attribute:
        "Aşılabilir Engel: 20 mm <br> Çalışma Süresi: 150 dk <br> Toz Kapasitesi: 0.48 lt <br> Şarj Süresi: 1 Saat <br> Emiş Türü: Kuru <br> Teknoloji: Üçlü Temizlik Sistemi <br> Kullanım Alanı: Halı <br> Pil Tipi: Li-ion",
    },
    {
      name: "Samsung VC07R302MVP",
      categoryName: "Elektrikli Ev Aletleri",
      price: "1.199,00 TL",
      photo: "./img/item26.jpg",
      attribute:
        "Toz Haznesi: Var <br> Ses Seviyesi (dB): 79.3 <br> Su Haznesi: Yok <br> Hepa Filtre: Var <br> Motor Gücü (watt): 750 <br> Toz Torbası: Yok",
    },
    {
      name: "Philips Azur GC4909/60",
      categoryName: "Elektrikli Ev Aletleri",
      price: "1.299,90 TL",
      photo: "./img/item27.jpg",
      attribute:
        "Damlama Önleme: Var <br> Kireç Önleme: Var <br> Şok Buhar gr/dk: 250 <br> Su Doldurma Kapasitesi: 300 ml <br> Otomatik Kapanma: Var <br> Sürekli Buhar gr/dk: 55 <br> Taban: Steam Glide <br> Watt: 3000",
    },
  ],
};
