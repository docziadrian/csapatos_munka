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
