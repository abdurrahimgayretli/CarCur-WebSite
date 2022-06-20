var nameArray = [];
nameArray[0] = "";
function getProduct(name) {
  var b = document.getElementById(name).innerText,
    url =
      "./single-product.html?name=" +
      encodeURIComponent(nameArray[0]) +
      "=" +
      encodeURIComponent(b);

  document.location.href = url;
}
function getIndex(index) {
  if (nameArray != "")
    url = `./${index}.html?name=` + encodeURIComponent(nameArray[0]);
  else url = `./${index}.html`;
  document.location.href = url;
}
function getProductCart() {
  var url = document.location.href;
  params = url.split("?")[1];
  params = url.split("=")[2];
  var data = "";
  tmp = params.split("%20");
  for (var i = 0; i < tmp.length; i++) {
    data += tmp[i] + " ";
  }

  url =
    "./cart.html?name=" +
    encodeURIComponent(nameArray[0]) +
    "=" +
    encodeURIComponent(data.replaceAll(" ", ""));

  document.location.href = url;
}

var list1 = ["product1", "product2", "product3", "product4"];
var listCategory = [
  "Beyaz Esya",
  "Bilgisayar Tablet",
  "Telefon",
  "Elektrikli Ev Aletleri",
];
window.onload = function () {
  var url = document.location.href;
  params = url.split("=")[2];
  params1 = url.split("=")[1];
  if (params1 != "") {
    document.getElementById("logout").style.visibility = "visibile";
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
    document.getElementById("logout").style.visibility = "hidden";
    document.getElementById("account").innerHTML = `
    <a href="formgiris.html">
          <h1>Giriş Yap</h1>
        </a>`;
  }
  var data = "";
  tmp = params.split("%20");
  for (var i = 0; i < tmp.length; i++) {
    data += tmp[i] + " ";
  }
  for (var key in obj.products) {
    if (
      data.replaceAll(" ", "") == obj.products[key].name.replaceAll(" ", "")
    ) {
      document.getElementById("hProductName").innerHTML =
        obj.products[key].name;
      document.getElementById("productName").innerHTML = obj.products[key].name;
      document.getElementById("price").innerHTML = obj.products[key].price;
      document.getElementById("attribute").innerHTML =
        obj.products[key].attribute;
      document.getElementById("photo").src = obj.products[key].photo;
      document.getElementById("categoryName").innerHTML =
        obj.products[key].categoryName;
    }
  }
  list1.forEach((product, i) => {
    document.querySelector("#products1").innerHTML += `
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
    document.getElementById(product).innerHTML = obj.products[i].name;
    document.getElementById(product + "price").innerHTML =
      obj.products[i].price;
    document.getElementById(product + "photo").src = obj.products[i].photo;
  });
};
function getCategoryName(name) {
  var b = document.getElementById(name).innerHTML;
  var url =
    "./shop.html?name=" +
    encodeURIComponent(nameArray[0]) +
    "=" +
    encodeURIComponent(b);

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
const obj = {
  products: [
    {
      name: "Lenovo Ideapad Gaming 3",
      categoryName: "Bilgisayar Tablet",
      price: "11.999,00 TL",
      photo: "./img/item1.jpg",
      attribute:
        "Notebook İşlemci Modeli:	Ryzen 7 5800H <br> GPU Model:	GeForce RTX 3060 <br> Ram Kapasitesi:	16GB <br> Ekran Boyutu:	15.6 <br> İşletim Sistemi	FreeDos",
    },
    {
      name: "Casper Excalibur G770",
      categoryName: "Bilgisayar Tablet",
      price: "13.499,00 TL",
      photo: "./img/item2.jpg",
      attribute:
        "Ekran Boyutu: 15,6 inç <br> Ekran Kartı: Nvidia GeForce RTX 3050 Ti <br> Harddisk Kapasitesi:Yok <br> İşletim Sistemi Windows 11 Home <br> İşlemci: 11400H <br> İşlemci Tipi: Intel Core i5 <br> Ram (Sistem Belleği): 8 GB <br> Ekran Kartı Hafızası: 4 GB",
    },
    {
      name: "Huawei Matebook D15",
      categoryName: "Bilgisayar Tablet",
      price: "13.188,00 TL",
      photo: "./img/item3.jpg",
      attribute:
        "Ekran Kartı Hafızası: Paylaşımlı <br> Ekran Boyutu: 15,6 inç <br> Ekran Kartı: Intel Iris Xe Graphics <br> Harddisk Kapasitesi: Yok <br> İşletim Sistemi: Windows 11 Home <br> İşlemci: 1165G7 <br> İşlemci Tipi: Intel Core i7 <br> Ram (Sistem Belleği): 16 GB",
    },
    {
      name: "Lenovo Tab P11",
      categoryName: "Bilgisayar Tablet",
      price: "3.799,00 TL",
      photo: "./img/item4.jpg",
      attribute:
        "İşletim Sistemi Tabanı: Android <br> Mobil Bağlantı: Yok <br> Kamera: Çift Kamera <br> Tablet İşlemci: Qualcomm Snapdragon 662 <br> Ekran Boyutu: 11 inç <br> Ekran Modeli: TDDI <br> Max Ekran Çözünürlüğü: 2000 x 1200 <br> Ram Kapasitesi: 4 GB",
    },
    {
      name: "Asus X515FA-EJ045",
      categoryName: "Bilgisayar Tablet",
      price: "7.980,00 TL",
      photo: "./img/item5.jpg",
      attribute:
        "Ekran Kartı Hafızası: Paylaşımlı <br> İşletim Sistemi: Yok (Free Dos) <br> İşlemci: 10210URam (Sistem Belleği): 8 GB <br> Garanti Tipi:  Resmi Distribütör Garantili <br> İşlemci Tipi: Intel Core i5 <br> Harddisk Kapasitesi: Yok <br> Ekran Boyutu: 15,6 inç <br> Ekran Kartı: Intel UHD Graphics",
    },
    {
      name: "Dell Gaming G15",
      categoryName: "Bilgisayar Tablet",
      price: "19.898,99 TL",
      photo: "./img/item6.jpg",
      attribute:
        "Ekran Kartı Hafızası: 4 GB <br> Garanti Tipi: Resmi Distribütör Garantili <br> Harddisk Kapasitesi: Yok <br> İşletim Sistemi: Ubuntu <br> İşlemci: 11800H <br> İşlemci Tipi: Intel Core i7 <br> Ram (Sistem Belleği): 16 GB <br> Ekran Boyutu: 15,6 inç <br> Ekran Kartı: Nvidia GeForce RTX 3050 Ti",
    },
    {
      name: "Lenovo Tab M10",
      categoryName: "Bilgisayar Tablet",
      price: "2.285,99 TL",
      photo: "./img/item7.jpg",
      attribute:
        "Mobil Bağlantı: Yok <br> Kamera: Çift Kamera <br> Tablet İşlemci: Helio P22T <br> Dahili Hafıza: 64 GB <br> İşletim Sistemi Tabanı: Android <br> Ekran Modeli: TDDI <br> Ekran Boyutu: 10,1 inç <br> Wi-Fi: 802.11 a/b/g/n/ac <br> Max Ekran Çözünürlüğü: 1280 x 800 <br> Ram Kapasitesi: 4 GB",
    },
    {
      name: "Lenovo IdeaPad Gaming 3",
      categoryName: "Bilgisayar Tablet",
      price: "10.998,99  TL",
      photo: "./img/item8.jpg",
      attribute:
        "Ekran Kartı Hafızası: 4 GB <br> İşletim Sistemi: Yok (Free Dos) <br> İşlemci: 5600H <br> Ram (Sistem Belleği): 8 GB <br> Garanti Tipi: Resmi Distribütör Garantili <br> İşlemci Tipi: AMD Ryzen 5 <br> Harddisk Kapasitesi: Yok <br> Ekran Boyutu: 15,6 inç <br> Ekran Kartı: Nvidia GeForce GTX1650",
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
      name: "Kumtel KO-40TSHDF",
      categoryName: "Beyaz Esya",
      price: "1.098,00 TL",
      photo: "./img/item19.jpg",
      attribute:
        "Ocak Göz Sayısı: 4 Gözü Gazlı <br> Gazlı Ocak Gözü: 4 <br> Ocak Yüzeyi: Cam <br> Ateşleme Tipi: Düğmeden <br> Elektrikli Ocak Gözü: Yok <br> Yakıt Tipi: LPG <br> Ocak Tipi: Gazlı",
    },
    {
      name: "Samsung MS23K3555ES",
      categoryName: "Beyaz Esya",
      price: "2.248,01 TL",
      photo: "./img/item20.jpg",
      attribute:
        "Güç (W): 800 <br> Fırın Hacmi: 23 <br> Izgara: Yok <br> Yükseklik (cm): 27.5 <br> Derinlik (cm): 37.4",
    },
    {
      name: "Kumtel DA6-833",
      categoryName: "Beyaz Esya",
      price: "548,00 TL",
      photo: "./img/item21.jpg",
      attribute:
        "Kademe Sayısı: 1 <br> Cihaz Genişliği: 60 cm <br> Hava Debisi (m3/sa): 250 m3/sa <br> Ses Seviyesi (dB): 68 dB <br> Cihaz Şekli: Eğimli <br> Kontrol Tipi: Mekanik",
    },
    {
      name: "Kumtel KO-40 TSHDF",
      categoryName: "Beyaz Esya",
      price: "898,00 TL",
      photo: "./img/item22.jpg",
      attribute:
        "Gazlı Ocak Gözü: 4 <br> Ocak Yüzeyi: Cam <br> Ateşleme Tipi: Düğmeden <br> Ocak Göz Sayısı: 4 Gözü Gazlı <br> Ocak Tipi: Gazlı <br> Elektrikli Ocak Gözü: Yok <br> Yakıt Tipi: Doğalgaz",
    },
    {
      name: "Profilo SS1161",
      categoryName: "Beyaz Esya",
      price: "2.803,77 TL",
      photo: "./img/item23.jpg",
      attribute: "Renk: Beyaz <br> Musluk Sayısı: 2 <br> Türü: Gizli Damacana",
    },
    {
      name: "Profilo CGA242X1TR",
      categoryName: "Beyaz Esya",
      price: "6.044,07 TL",
      photo: "./img/item24.jpg",
      attribute:
        "Genişlik (cm): 59.7 <br> Kurutmalı: Hayır <br> Derinlik (cm): 58.8 <br> Yükseklik (cm): 84.5 <br> Maksimum Devir Hızı: 1200 <br> Yıkama Kapasitesi: 9 kg",
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
      name: "iPhone 13 128 GB",
      categoryName: "Telefon",
      price: "18.146,08 TL",
      photo: "./img/item11.jpg",
      attribute:
        "Pil Gücü: 3095 mAh <br> Kamera Çözünürlüğü: 12 MP + 12 MP <br> Ön (Selfie) Kamera: 12 MP <br> Dahili Hafıza: 128 GB <br> Ekran Boyutu: 6,1 inç <br> RAM Kapasitesi: 4 GB RAM",
    },
    {
      name: "Xiaomi Redmi Note 10S",
      categoryName: "Telefon",
      price: "5.092,50 TL",
      photo: "./img/item12.jpg",
      attribute:
        "Dahili Hafıza: 128 GB <br> Ekran Boyutu: 6,43 inç <br> RAM Kapasitesi: 6 GB RAM <br> Ön (Selfie) Kamera: 13 MP <br> Pil Gücü: 5000 mAh <br> Kamera Çözünürlüğü: 64 MP + 8 MP + 2 MP + 2 MP",
    },
    {
      name: "Poco X3 Pro",
      categoryName: "Telefon",
      price: "7.275,00 TL",
      photo: "./img/item13.jpg",
      attribute:
        "Dahili Hafıza: 256 GB <br> Ekran Boyutu: 6,67 inç <br> RAM Kapasitesi: 8 GB RAM <br> Ön (Selfie) Kamera: 20 MP <br> Pil Gücü: 5160 mAh <br> Kamera Çözünürlüğü: 48 MP + 8 MP + 2 MP + 2 MP",
    },
    {
      name: "Samsung Galaxy A13",
      categoryName: "Telefon",
      price: "4.099,00 TL",
      photo: "./img/item14.jpg",
      attribute:
        "Dahili Hafıza: 128 GB <br> Ekran Boyutu: 6,6 inç <br> RAM Kapasitesi: 4 GB RAM <br> Ön (Selfie) Kamera: 8,0 MP <br> Pil Gücü: 5000 mAh <br> Kamera Çözünürlüğü: 50 MP + 2 MP + 2 MP",
    },
    {
      name: "Oppo A15s 64 GB",
      categoryName: "Telefon",
      price: "3.298,00 TL",
      photo: "./img/item15.jpg",
      attribute:
        "Pil Gücü: 4230 mAh <br> Kamera Çözünürlüğü: 13 MP + 2 MP + 2 MP <br> Ön (Selfie) Kamera: 8,0 MP <br> Dahili Hafıza: 64 GB <br> Ekran Boyutu: 6,52 inç <br> RAM Kapasitesi: 4 GB RAM",
    },
    {
      name: "Samsung Galaxy S22 Ultra 5G",
      categoryName: "Telefon",
      price: "25.522,38 TL",
      photo: "./img/item16.jpg",
      attribute:
        "Pil Gücü: 5000 mAh <br> Kamera Çözünürlüğü: 108 MP + 10 MP + 12 MP + 10 MP <br> Ön (Selfie) Kamera: 40 MP <br> Dahili Hafıza: 512 GB <br> Ekran Boyutu: 6,8 inç <br> RAM Kapasitesi: 12 GB RAM",
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
      name: "Philips Azur GC4909",
      categoryName: "Elektrikli Ev Aletleri",
      price: "1.299,90 TL",
      photo: "./img/item27.jpg",
      attribute:
        "Damlama Önleme: Var <br> Kireç Önleme: Var <br> Şok Buhar gr/dk: 250 <br> Su Doldurma Kapasitesi: 300 ml <br> Otomatik Kapanma: Var <br> Sürekli Buhar gr/dk: 55 <br> Taban: Steam Glide <br> Watt: 3000",
    },
    {
      name: "Fakir Rody Kablolu Supurge",
      categoryName: "Elektrikli Ev Aletleri",
      price: "398,05 TL",
      photo: "./img/item28.jpg",
      attribute:
        "Toz Haznesi: Var <br> Ses Seviyesi (dB): 64 <br> Su Haznesi: Yok <br> Hepa Filtre: Yok <br> Motor Gücü (watt): 800 <br> Toz Torbası: Yok",
    },
    {
      name: "Philips GC362 Buharli Duzlestirici",
      categoryName: "Elektrikli Ev Aletleri",
      price: "999,90 TL",
      photo: "./img/item29.jpg",
      attribute:
        "Damlama Önleme: Yok <br> Kireç Önleme: Yok <br> Şok Buhar gr/dk: 24 <br> Su Doldurma Kapasitesi: 70 ml <br> Otomatik Kapanma: Yok <br> Sürekli Buhar gr/dk: 24 <br> Taban: Çelik <br> Watt: 1300",
    },
    {
      name: "Philips GC5032 Utu",
      categoryName: "Elektrikli Ev Aletleri",
      price: "11.999,00 TL",
      photo: "./img/item30.jpg",
      attribute:
        "Damlama Önleme: Var <br> Kireç Önleme: Var <br> Şok Buhar gr/dk: 250 <br> Otomatik Kapanma: Var <br> Sürekli Buhar gr/dk: 65 <br> Watt: 3000 <br> Taban: Steam Glide",
    },
    {
      name: "Awox Cracks Max Sarjli El Supurgesi",
      categoryName: "Elektrikli Ev Aletleri",
      price: "280,33 TL",
      photo: "./img/item31.jpg",
      attribute:
        "Ses Seviyesi (dB): 77 <br> Su Haznesi: Yok <br> Hepa Filtre: Var <br> Motor Gücü (watt): 115",
    },
    {
      name: "Arzum OK004 Okka Minio Turk Kahvesi Makinesi",
      categoryName: "Elektrikli Ev Aletleri",
      price: "475,00 TL",
      photo: "./img/item32.jpg",
      attribute:
        "Renk: Bakır <br> Su Kapasitesi: 300 ml <br> Otomatik Kapanma: Var <br> Güç (W): 480 <br> Fincan Kapasitesi: 4 Fincan <br>Taşma Emniyeti: Var <br> Sesli İkaz: Var",
    },
  ],
};
