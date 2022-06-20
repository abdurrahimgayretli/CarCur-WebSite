var nameArray = [];
nameArray[0] = "";
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
window.onload = function () {
  var url = document.location.href;
  params = url.split("?")[1];
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
    params1 = url.split("=")[3].split("-");
    console.log(params1);
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

  document.getElementById("price").innerHTML +=
    " " + data.replaceAll("%2C", ",").split("%2F")[0];
  document.getElementById("subTotal").innerHTML +=
    " " + data.replaceAll("%2C", ",").split("%2F")[0];
  document.getElementById("isim").innerText +=
    params1[0].charAt(0).toUpperCase() +
    params1[0].slice(1) +
    " " +
    params1[1].charAt(0).toUpperCase() +
    params1[1].slice(1);
};
