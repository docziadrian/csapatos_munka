document.getElementById("garancia").onclick = function () {
  if (document.getElementById("garancia").checked) {
    let osszesen = kosar
      .map((x) => {
        let { id, item } = x;
        let filterData = targyakAdata.find((x) => x.id === id);
        return filterData.price * item;
      })
      .reduce((x, y) => x + y, 0);
    osszesen += 30000;
    document.getElementById(
      "osszesen"
    ).innerHTML = `<h3 class="p" id="osszesen">Összesen: ${osszesen}</h3>`;
    document.getElementById(
      "osszesen2"
    ).innerHTML = `<h3 class="p" id="osszesen">Összesen: ${osszesen}</h3>`;
  } else {
    let osszesen = kosar
      .map((x) => {
        let { id, item } = x;
        let filterData = targyakAdata.find((x) => x.id === id);
        return filterData.price * item;
      })
      .reduce((x, y) => x + y, 0);
    document.getElementById(
      "osszesen"
    ).innerHTML = `<h3 class="p" id="osszesen">Összesen: ${osszesen}</h3>`;
    document.getElementById(
      "osszesen2"
    ).innerHTML = `<h3 class="p" id="osszesen">Összesen: ${osszesen}</h3>`;
  }
};

paypal
  .Buttons({
    createOrder: function (data, actions) {
      //Tranzakció adatai
      return actions.order.create({
        purchase_units: [
          {
            amount: {
              value: 50,
            },
          },
        ],
      });
    },
  })
  .render(`#${ide}`);
