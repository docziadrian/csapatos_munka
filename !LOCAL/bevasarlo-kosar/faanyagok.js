let faanyagok = document.getElementById("faanyagok");

let kosar = JSON.parse(localStorage.getItem("adat")) || [];
/*A local storage -ből előhívja az adatokat, ha nincs semmi a
local storage -ben, akkor egy az üres storage -et hívja meg.*/

let generateFaanyagok = () => {
  return (faanyagok.innerHTML = targyakAdata
    .map((x) => {
    let { id, name, price, img, img_siker, hidden } = x;
    let search = kosar.find((x) => x.id === id) || [];
    return `
    <div class="container-fluid align-items-center">
    <div class="row keret">
      <div class="col col-lg-5 col-xl-2" id="termek-id-${id}">
        <div class="card" style="width: 15rem; height: 23rem">
            <img class="w-75" src=${img} />
          <div class="card-body">
            <h5 class="card-title">Fanév</h5>
            <p class="card-text">the sky is split woe be upon us</p>
            <a href="#" class="btn btn-primary">Vásárlás</a>
            <div class="popovergomb">
              <div class="container">
                <h3></h3>
                <a
                  href="#"
                  data-toggle="popover"
                  data-content="Info a fáról"
                  title="Info"
                  ><img
                    src="/csapatos_munka/!LOCAL/Pictures/question-circle.svg"
                    width="50px"
                    height="50px"
                    alt="Kérdőjel"
                /></a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="col col-lg-5 col-xl-2">
        <div class="card" style="width: 15rem; height: 23rem">
          <img
            class="card-img-top"
            src="/csapatos_munka/!LOCAL/Pictures/faanyagok/Fadeszka_cseresznye.png"
            alt="Card image cap"
          />
          <div class="card-body">
            <h5 class="card-title">Fanév</h5>
            <p class="card-text">the sky is split woe be upon us</p>
            <a href="#" class="btn btn-primary">Vásárlás</a>
            <div class="popovergomb">
              <div class="container">
                <h3></h3>
                <a
                  href="#"
                  data-toggle="popover"
                  data-content="Info a fáról"
                  title="Info"
                  ><img
                    src="/csapatos_munka/!LOCAL/Pictures/question-circle.svg"
                    width="50px"
                    height="50px"
                    alt="Kérdőjel"
                /></a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col col-lg-5 col-xl-2">
        <div class="card" style="width: 15rem; height: 23rem">
          <img
            class="card-img-top"
            src="/csapatos_munka/!LOCAL/Pictures/faanyagok/Fadeszka_diófa.png"
            alt="Card image cap"
          />
          <div class="card-body">
            <h5 class="card-title">Fanév</h5>
            <p class="card-text">the sky is split woe be upon us</p>
            <a href="#" class="btn btn-primary">Vásárlás</a>
            <div class="popovergomb">
              <div class="container">
                <h3></h3>
                <a
                  href="#"
                  data-toggle="popover"
                  data-content="Info a fáról"
                  title="Információ"
                  ><img
                    src="/csapatos_munka/!LOCAL/Pictures/question-circle.svg"
                    width="50px"
                    height="50px"
                    alt="Kérdőjel"
                /></a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col col-lg-5 col-xl-2">
        <div class="card" style="width: 15rem; height: 23rem">
          <img
            class="card-img-top"
            src="/csapatos_munka/!LOCAL/Pictures/faanyagok/Fadeszka_hársfa.png"
            alt="Card image cap"
          />
          <div class="card-body">
            <h5 class="card-title">Fanév</h5>
            <p class="card-text">the sky is split woe be upon us</p>
            <a href="#" class="btn btn-primary">Vásárlás</a>
            <div class="popovergomb">
              <div class="container">
                <h3></h3>
                <a
                  href="#"
                  data-toggle="popover"
                  data-content="Info a fáról"
                  title="Info"
                  ><img
                    src="/csapatos_munka/!LOCAL/Pictures/question-circle.svg"
                    width="50px"
                    height="50px"
                    alt="Kérdőjel"
                /></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="row keret">
    <div class="col col-lg-5 col-xl-2">
      <div class="card" style="width: 15rem; height: 23rem">
        <img
          class="card-img-top"
          src="/csapatos_munka/!LOCAL/Pictures/faanyagok/Fadeszka_juharfa.png"
          alt="Card image cap"
        />
        <div class="card-body">
          <h5 class="card-title">Fanév</h5>
          <p class="card-text">the sky is split woe be upon us</p>
          <a href="#" class="btn btn-primary">Vásárlás</a>
          <div class="popovergomb">
            <div class="container">
              <h3></h3>
              <a
                href="#"
                data-toggle="popover"
                data-content="Info a fáról"
                title="Info"
                ><img
                  src="/csapatos_munka/!LOCAL/Pictures/question-circle.svg"
                  width="50px"
                  height="50px"
                  alt="Kérdőjel"
              /></a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col col-lg-5 col-xl-2">
      <div class="card" style="width: 15rem; height: 23rem">
        <img
          class="card-img-top"
          src="/csapatos_munka/!LOCAL/Pictures/faanyagok/Fadeszka_Nyírfa.png"
          alt="Card image cap"
        />
        <div class="card-body">
          <h5 class="card-title">Fanév</h5>
          <p class="card-text">the sky is split woe be upon us</p>
          <a href="#" class="btn btn-primary">Vásárlás</a>
          <div class="popovergomb">
            <div class="container">
              <h3></h3>
              <a
                href="#"
                data-toggle="popover"
                data-content="Info a fáról"
                title="Info"
                ><img
                  src="/csapatos_munka/!LOCAL/Pictures/question-circle.svg"
                  width="50px"
                  height="50px"
                  alt="Kérdőjel"
              /></a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col col-lg-5 col-xl-2">
      <div class="card" style="width: 15rem; height: 23rem">
        <img
          class="card-img-top"
          src="/csapatos_munka/!LOCAL/Pictures/faanyagok/Fadeszka_Szilfa.png"
          alt="Card image cap"
        />
        <div class="card-body">
          <h5 class="card-title">Fanév</h5>
          <p class="card-text">the sky is split woe be upon us</p>
          <a href="#" class="btn btn-primary">Vásárlás</a>
          <div class="popovergomb">
            <div class="container">
              <h3></h3>
              <a
                href="#"
                data-toggle="popover"
                data-content="Info a fáról"
                title="Info"
                ><img
                  src="/csapatos_munka/!LOCAL/Pictures/question-circle.svg"
                  width="50px"
                  height="50px"
                  alt="Kérdőjel"
              /></a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col col-lg-5 col-xl-2">
      <div class="card" style="width: 15rem; height: 23rem">
        <img
          class="card-img-top"
          src="/csapatos_munka/!LOCAL/Pictures/faanyagok/Fadeszka_Tölgyfa.png"
          alt="Card image cap"
        />
        <div class="card-body">
          <h5 class="card-title">Fanév</h5>
          <p class="card-text">the sky is split woe be upon us</p>
          <a href="#" class="btn btn-primary">Vásárlás</a>
          <div class="popovergomb">
            <div class="container">
              <h3></h3>
              <a
                href="#"
                data-toggle="popover"
                data-content="Info a fáról"
                title="Info"
                ><img
                  src="/csapatos_munka/!LOCAL/Pictures/question-circle.svg"
                  width="50px"
                  height="50px"
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
