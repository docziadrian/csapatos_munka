let shop = document.getElementById("shop");

let kosar = JSON.parse(localStorage.getItem("adat")) || [];
/*A local storage -ből előhívja az adatokat, ha nincs semmi a
local storage -ben, akkor egy az üres storage -et hívja meg.*/

let generateShop = () => {
  //Array function

  return (shop.innerHTML = targyakAdata
    .map((x) => {
      let { id, name, price, img, img_siker, hidden } = x;
      let search = kosar.find((x) => x.id === id) || [];
      return `
        <div id=termek-id-${id} class="festek item">
                <img class="w-75" src=${img} alt="">
                <div id="${hidden}">
                    <img class="w-75" src=${img_siker} />
                </div>
                <p>${name}</p>
                <p><span>Gyártó:</span> Festék</p>
                <p><span>Felhasználás:</span> Beltér</p>
                <p><span>Mennyiség:</span> 15 liter</p>
                    <p><span class="termek-ar">Ár:</span> ${price}FT</p>
                    <div class="d-flex justify-content-center">
                        <button onclick="hozzaadas(${id}, ${hidden})" type="button" class="vasarlas btn btn-primary">Vásárlás</button>
                        <div id=${id} class="mennyiseg_style">
                        ${search.item === undefined ? 0 : search.item}
                        </div>
                        <div class="x-icon">x</div>
                    </div>
                </div>
                
        </div>
    </div>
`;
    })
    .join(""));
};

generateShop();

let hozzaadas = (id, hidden) => {
  console.log(hidden.id);
  document.getElementById(hidden.id).style.display = "block";

  setTimeout(() => {
    document.getElementById(hidden.id).style.display = "none";
  }, 1500);
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
  localStorage.setItem("adat", JSON.stringify(kosar));

  // console.log(kosar);

  update(kivalasztottTargy.id);
};
let kivonas = (id) => {
  let kivalasztottTargy = id;
  let search = kosar.find((x) => x.id === kivalasztottTargy.id);

  if (search === undefined) return;
  else if (search.item === 0) return;
  else {
    search.item -= 1;
  }

  update(kivalasztottTargy.id);

  kosar = kosar.filter((x) => x.item !== 0);

  localStorage.setItem("adat", JSON.stringify(kosar));
};
let update = (id) => {
  let search = kosar.find((x) => x.id === id);
  document.getElementById(id).innerHTML = search.item;
  osszesites2();
};

osszesites2 = () => {
  let kosar_ikon = document.getElementById("kosar_mennyiseg");
  kosar_ikon.innerHTML = kosar.map((x) => x.item).reduce((x, y) => x + y, 0);
};
