let faanyagok = document.getElementById("faanyagok");

let kosar = JSON.parse(localStorage.getItem("adat")) || [];
/*A local storage -ből előhívja az adatokat, ha nincs semmi a
local storage -ben, akkor egy az üres storage -et hívja meg.*/

let generateFaanyagok = () => {
  return (faanyagok.innerHTML = targyakAdata
    .map((x) => {
      let { leiras, id, name, price, img, img_siker, hidden } = x;
      let search = kosar.find((x) => x.id === id) || [];
      return `
      <div id=termek-id-${id} class="item">
      <img class="w-100" src=${img} alt="">
      <div class="card" style="width: auto; height: auto">
      <div class="card-body">
              <h5 class="card-title">${name}</h5>
              <p class="card-text">Ár: ${price} Ft/m3</p>
              
              <a href="#" class="btn btn-primary">Vásárlás</a>
              <div class="d-flex">
              <div class="popovergomb">
                <div class="mt-3 kerdojel">
                  <h3></h3>
                  <a
                    href="#"
                    data-toggle="popover"
                    data-content="${leiras}"
                    title="Információ"
                    ><img
                      src="/csapatos_munka/!LOCAL/Pictures/question-circle.svg"
                      width="45px"
                      height="40px"
                      alt="Kérdőjel"
                  /></a>
                </div>
              </div>
            </div>
            </div>

      </div>
      
</div>
</div>
    `;
    })
    .join(""));
};

generateFaanyagok();
