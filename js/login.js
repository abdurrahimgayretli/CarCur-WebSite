var emailArray = [];
var passwordArray = [];
var nameArray = [];
nameArray[0] = "";
var loginBox = document.getElementById("login");
var regBox = document.getElementById("register");

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

function regTabFun() {
  event.preventDefault();

  regBox.style.visibility = "visible";
  loginBox.style.visibility = "hidden";
}
function loginTabFun() {
  event.preventDefault();

  regBox.style.visibility = "hidden";
  loginBox.style.visibility = "visible";
}
function register() {
  event.preventDefault();
  var firstName = document.getElementById("rfn").value;
  var lastName = document.getElementById("rln").value;
  var email = document.getElementById("re").value;
  var password = document.getElementById("rp").value;

  if (firstName == "") {
    alert("Boş Kısımları Doldurunuz");
    return;
  } else if (lastName == "") {
    alert("Boş Kısımları Doldurunuz");
    return;
  } else if (email == "") {
    alert("Boş Kısımları Doldurunuz");
    return;
  } else if (password == "") {
    alert("Boş Kısımları Doldurunuz");
    return;
  } else if (emailArray.indexOf(email) == -1) {
    emailArray.push(email);
    passwordArray.push(password);
    nameArray.push(firstName + "-" + lastName);

    alert(email + "  Kayıt olduğunuz için teşekkürler \nŞimdi giriş yapınız.");

    document.getElementById("re").value = "";
    document.getElementById("rp").value = "";
  } else {
    alert(email + " zaten kayıtlı");
    return;
  }
}
function login() {
  event.preventDefault();

  var email = document.getElementById("se").value;
  var password = document.getElementById("sp").value;

  var i = emailArray.indexOf(email);

  if (emailArray.indexOf(email) == -1) {
    if (email == "") {
      alert("E-posta gerekli.");
      return;
    }
    alert("E-posta mevcut değil.");
    return;
  } else if (passwordArray[i] != password) {
    if (password == "") {
      alert("Şifre gerekli.");
      return;
    }
    alert("Şifre eşleşmiyor.");
    return;
  } else {
    alert(email + " şimdi giriş yapıyorsun \n Web sitemize hoşgeldiniz.");
    document.getElementById("se").value = "";
    document.getElementById("sp").value = "";
    url = "./index.html?name=" + encodeURIComponent(nameArray[1]);

    document.location.href = url;
    return;
  }
}
