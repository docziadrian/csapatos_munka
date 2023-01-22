let valtoztatva = false;
let label = document.getElementById("label");
let BevasarloKocsi = document.getElementById("shopping-cart");

let kosar = JSON.parse(localStorage.getItem("adat")) || [];

let osszesites2 = () => {
  let kosar_ikon = document.getElementById("kosar_mennyiseg");
  kosar_ikon.innerHTML = kosar.map((x) => x.item).reduce((x, y) => x + y, 0);
};

let generateCartItems = () => {
  if (kosar.length !== 0) {
    return (BevasarloKocsi.innerHTML = kosar
      .map((x) => {
        let { id, item } = x;
        let search = targyakAdata.find((y) => y.id === id) || [];
        return `
            <div class="cart-item festek">
            <img width="100" src=${search.img} alt="" />
            <div class="details">
              <div class="title-price-x">
                  <h4 class="title-price">
                    <p>${search.name}</p>
                    <p class="cart-item-price fs-5 fw-b">${
                      search.price
                    } FT / db</p>
                  </h4>
                  
              </div>
              <div class="text-center fs-5">
                  <div id=${id} class="">
                    <i onclick="kivonas(${id})" class="bi bi-dash-lg"></i>
                    ${item} darab
                    <i onclick="hozzaadas(${id})" class="bi bi-plus-lg"></i>
                  </div></div>
              </div>

              
              <h3>${item * search.price} FT</h3>
              <button type="button" onclick="kosarTorles(${id})" class="btn btn-danger">Törlés</button>

            </div>
          </div>
            `;
      })
      .join(""));
  } else {
    BevasarloKocsi.innerHTML = ``;
    label.innerHTML = `
        <h2 class="text-center ml-5">A kosarad üres.</h2>
        <a href="/weboldalak/festekek.html"> <button type="button" class="btn btn-primary">Vásárolok</button> </a>
        `;
  }
};

let hozzaadas = (id) => {
  let kivalasztottTargy = id;
  let search = kosar.find((x) => x.id === kivalasztottTargy.id);

  if (search === undefined) {
    kosar.push({
      id: kivalasztottTargy.id,
      item: 1,
    });
  } else {
    search.item += 1;
  }

  generateCartItems();
  update(kivalasztottTargy.id);
  localStorage.setItem("adat", JSON.stringify(kosar));
};

let kivonas = (id) => {
  let kivalasztottTargy = id;
  let search = kosar.find((x) => x.id === kivalasztottTargy.id);

  if (search === undefined) return;
  else if (search.item === 0) return;
  else {
    search.item -= 1;
  }

  kosar = kosar.filter((x) => x.item !== 0);
  generateCartItems();
  update(kivalasztottTargy.id);
  localStorage.setItem("adat", JSON.stringify(kosar));
};

let update = (id) => {
  let search = kosar.find((x) => x.id === id);
  osszesites2();
  TotalAmount((valtoztatva = false));
};

let kosarTorles = (id) => {
  let kivalasztottTargy = id;
  kosar = kosar.filter((x) => x.id !== kivalasztottTargy.id);
  osszesites2();
  generateCartItems();
  TotalAmount((valtoztatva = false));
  localStorage.setItem("adat", JSON.stringify(kosar));
};
let ide = "vasarlas";

let TotalAmount = (valtoztatva) => {
  if (kosar.length !== 0) {
    let osszesen = kosar
      .map((x) => {
        let { id, item } = x;
        let filterData = targyakAdata.find((x) => x.id === id);
        return filterData.price * item;
      })
      .reduce((x, y) => x + y, 0);

    return (label.innerHTML = `
       <div class="text-center">
          <h3 class="p">Házhozszállítás: 1000FT</h3>
          <h3 class="p" id="osszesen">Összesen: ${osszesen} FT</h3>
          <br>
              <div class="text-center">
              <h5><input type="checkbox" id="aszf"> Elfogadom az <span>ászf </span>feltételeket <span id="jel"></span></h5>
              <h5><input onclick="garancia()" id="garancia" type="checkbox"> +1 év garanciát kérek (30.000FT)</h5>
              </div>



        </div>

        <div class="text-center">
            <button id="tovabb" class="btn btn-success" onclick="rendeles_gomb_lenyomva()">Tovább a rendeléshez</button>
        </div>
        <br>

        



        <!-- Modal -->
          <div class="modal modal-lg fade" id="vasarlasModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-body">
                                <div id="wrapper">
                                  <div id="info">
                                    <img id="kep_final" src="../../csapatos_munka/Pictures/ikon.png">
                                    <p>Festékek</p>
                                      <h3 class="mb-5" id="osszesen2">${osszesen} FT</h3>
                                      <h4> <a href="https://developer.paypal.com/home/" target="_blank">? PayPal Sandbox módban ? </a></h4>
                                      <h4 id="red">! Kérlek ne fizess be semmilyen összeget, mert nem kapom meg !</h4>
                                  </div>
                              
                                  <div id=${ide} class="mt-5">
                                  </div>
                                  <script>

                              </div>
                </div>
              </div>
            </div>
          </div>
      `);
  } else return;
};

TotalAmount((valtoztatva = false));

let clearCart = () => {
  basket = [];
  generateCartItems();
  calculation();
  localStorage.setItem("data", JSON.stringify(basket));
};

generateCartItems();
osszesites2();

function rendeles_gomb_lenyomva() {
  if (document.getElementById("aszf").checked == false) {
    setTimeout(() => {
      document.getElementById("jel").style.fontSize = "20px";
      document.getElementById("jel").style.color = "red";
      document.getElementById("jel").innerHTML = "!!!";
    }, 200);
    setTimeout(() => {
      document.getElementById("jel").style.fontSize = "25px";
      document.getElementById("jel").style.color = "red";
      document.getElementById("jel").innerHTML = "!!!";
    }, 1700);
    setTimeout(() => {
      document.getElementById("jel").innerHTML = "";
    }, 2000);
  } else {
    $("#vasarlasModal").modal("show");
  }
}

function garancia() {
  if (document.getElementById("garancia").checked) {
    let osszesen = kosar
      .map((x) => {
        let { id, item } = x;
        let filterData = targyakAdata.find((x) => x.id === id);
        return filterData.price * item + 30000;
      })
      .reduce((x, y) => x + y, 0);
    document.querySelector("#osszesen2").innerHTML = `${osszesen} FT`;
    document.querySelector(
      "#osszesen"
    ).innerHTML = `Összesen: ${osszesen} FT (+30k garancia)`;
  } else {
    let osszesen = kosar
      .map((x) => {
        let { id, item } = x;
        let filterData = targyakAdata.find((x) => x.id === id);
        return filterData.price * item;
      })
      .reduce((x, y) => x + y, 0);

    document.querySelector("#osszesen2").innerHTML = `${osszesen} FT`;
    document.querySelector("#osszesen").innerHTML = `Összesen: ${osszesen} FT`;
  }
}

// Hivja meg megint de ellenorzes nelkul:
