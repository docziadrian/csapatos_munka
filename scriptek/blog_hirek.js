function Kerdes() {
  if (document.getElementById("kerdesBlog").checked) {
    localStorage.setItem("megjelenes", false);
    localStorage.setItem("szamlalo", 0);
  } else {
    localStorage.setItem("megjelenes", true);
  }
}

var items = window.localStorage.getItem("megjelenes");

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
      $("#myModal").modal("show");
    }, 2000);
  } else if (hamis) {
    console.log(
      "Figyelem, a hírdetések nem jelennem meg az oldalon, mert kikapcsoltad őket!"
    );
  }
});

document.getElementById("myvideo").onclick = function () {
  setTimeout(function () {
    $("#myVideo").modal("show");
    let vid = document.getElementById("hir_video");
    vid.autoplay = true;
    vid.load();
  }, 1000);
};

document.getElementById("close").onclick = function () {
  let vid = document.getElementById("hir_video");
  vid.autoplay = false;
  vid.pause();
};
