var jelenitsd_meg = Math.floor(Math.random() * 5) + 1; //1 - 5
switch (jelenitsd_meg) {
  case 1:
    jelenitsd_meg = "#hir1";
    break;
  case 2:
    jelenitsd_meg = "#hir2";
    break;
  case 3:
    jelenitsd_meg = "#hir3";
    break;
  case 4:
    jelenitsd_meg = "#hir4";
    break;
  case 5:
    jelenitsd_meg = "#hir5";
    break;
}

var items = window.localStorage.getItem("megjelenes");
if (items == null || items == undefined || items == []) {
  localStorage.setItem("megjelenes", true);
}

function Kerdes() {
  var hir1_elrejtes = document.getElementById("kerdesBlog1").checked;
  var hir2_elrejtes = document.getElementById("kerdesBlog2").checked;
  var hir3_elrejtes = document.getElementById("kerdesBlog3").checked;
  var hir4_elrejtes = document.getElementById("kerdesBlog4").checked;
  var hir5_elrejtes = document.getElementById("kerdesBlog5").checked;

  if (
    hir1_elrejtes ||
    hir2_elrejtes ||
    hir3_elrejtes ||
    hir4_elrejtes ||
    hir5_elrejtes
  ) {
    localStorage.setItem("megjelenes", false);
    localStorage.setItem("szamlalo", 0);
  }
}

function Bekapcsolta() {
  localStorage.setItem("megjelenes", true);
  $("#myModalHirdetes").modal("hide");
}

$(window).on("load", function () {
  let igaz = localStorage.getItem("megjelenes") === "true";
  let hamis = localStorage.getItem("megjelenes") === "false";

  let szamlalo = localStorage.getItem("szamlalo");
  if (szamlalo == null) {
    localStorage.setItem("szamlalo", 0);
  } else if (
    szamlalo.length == 5 ||
    szamlalo.length == 10 ||
    szamlalo.length == 15 ||
    szamlalo.length == 20 ||
    szamlalo.length == 25 ||
    szamlalo.length == 30 ||
    szamlalo.length == 35 ||
    szamlalo.length == 40
  ) {
    setTimeout(function () {
      $("#myModalHirdetes").modal("show");
    }, 200);
  }

  if (hamis) {
    szamlalo += 1;
    localStorage.setItem("szamlalo", szamlalo);
  }

  if (igaz || items === null || items === undefined) {
    setTimeout(function () {
      // Melyik hírt jeleníts meg?
      $(jelenitsd_meg).modal("show");
    }, 2000);
  } else if (hamis) {
    console.log(
      "Figyelem, a hírdetések nem jelennem meg az oldalon, mert kikapcsoltad őket!"
    );
  }
});

document.getElementById("myvideo1").onclick = function () {
  setTimeout(function () {
    $("#myVideo1").modal("show");
    let vid = document.getElementById("hir_video");
    vid.autoplay = true;
    vid.load();
  }, 1000);
};

document.getElementById("myvideo2").onclick = function () {
  setTimeout(function () {
    $("#myVideo2").modal("show");
    let vid = document.getElementById("hir_video2");
    vid.autoplay = true;
    vid.load();
  }, 1000);
};

document.getElementById("myvideo3").onclick = function () {
  setTimeout(function () {
    $("#myVideo3").modal("show");
    let vid = document.getElementById("hir_video3");
    vid.autoplay = true;
    vid.load();
  }, 1000);
};

document.getElementById("myvideo4").onclick = function () {
  setTimeout(function () {
    $("#myVideo4").modal("show");
    let vid = document.getElementById("hir_video4");
    vid.autoplay = true;
    vid.load();
  }, 1000);
};

document.getElementById("myvideo5").onclick = function () {
  setTimeout(function () {
    $("#myVideo5").modal("show");
    let vid = document.getElementById("hir_video5");
    vid.autoplay = true;
    vid.load();
  }, 1000);
};

function bezaras() {
  let vid = document.getElementById("hir_video");
  let vid2 = document.getElementById("hir_video2");
  let vid3 = document.getElementById("hir_video3");
  let vid4 = document.getElementById("hir_video4");
  let vid5 = document.getElementById("hir_video5");
  vid.autoplay = false;
  vid2.autoplay = false;
  vid3.autoplay = false;
  vid4.autoplay = false;
  vid5.autoplay = false;
  vid.pause();
  vid2.pause();
  vid3.pause();
  vid4.pause();
  vid5.pause();
}
