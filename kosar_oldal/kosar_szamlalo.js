kosar = JSON.parse(localStorage.getItem("adat")) || [];
let osszesites = () => {

        setTimeout(function(){
            let kosar_ikon = document.getElementById("kosar_mennyiseg");
            kosar_ikon.innerHTML = kosar.map((x) => x.item).reduce((x,y)=>x+y,0);
        }, 500);

};