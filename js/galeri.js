var nameArray = [];
nameArray[0] = "";
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
var fullImgBox = document.getElementById("fullImgBox");
var fullimg0 = document.getElementById("fullimg0");

function openFullImg(pic) {
  fullImgBox.style.display = "flex";
  fullimg0.src = pic;
}

function closeFullImg() {
  fullImgBox.style.display = "none";
}
var index = 1;
function plusIndex(n) {
  index = index + n;
  showImage(index);
}
showImage(1);
function showImage(n) {
  var i;
  var x = document.getElementsByClassName("slides");
  if (n > x.length) {
    index = 1;
  }
  if (n < 1) {
    index = x.length;
  }
  for (i = 0; i < x.length; i++) x[i].style.display = "none";
  x[index - 1].style.display = "block";
}
