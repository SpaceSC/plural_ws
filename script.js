// A pageLoaded függvény definiálása
function pageLoaded() { 

  // A root id-jű elem rootE változóba mentése
  let rootE = document.getElementById("root");

  // Az aTextArray nevű tömb létrehozása
  let aTextArray = ["szeder", "alma", "cseresznye", "eper", "egres", "meggy", "dinnye", "datolya", "barack", "kiwi", "citrom"];

  // Kilogolja az aTextArray 2-es indexű elemét
  // console.log(aTextArray[2]); 

  // Kilogolja, hogy hány eleme van az aTextArray-nek
  // console.log(aTextArray.length); 

  // For ciklus ( inicializálás: amelyik indextől indulunk, ciklusfeltétel,  inkrementálás: lefutás végén mindig eggyel növelje az indexet) { ciklusmag }
  for (let index = 0; index < aTextArray.length; index++) {

    // A rootE változó végére beszúrunk egy divet, aminek a text contentje a tömbünk aktuális indexű eleme lesz (ahányszor lefut a for ciklus) 
    rootE.insertAdjacentHTML("beforeend", `
      <div class="fruit">${aTextArray[index]}</div>
    `);

  }

  // Minden fruit osztályú html elemet kiszelektáltunk egy fruitDivs nevű tömbbe
  let fruitDivs = rootE.querySelectorAll(".fruit");
  
  // A fruitDivs tömb a 2-es indexű html elemének kilogolása
  // console.log(fruitDivs[2]);

  
  // For ciklus ( inicializálás: amelyik indextől indulunk, ciklusfeltétel,  inkrementálás: lefutás végén mindig eggyel növelje az indexet) { ciklusmag }
  for (let index = 0; index < fruitDivs.length; index++) {
    
    // Elemek indexének logikai vizsgálata index === 1-gyel, true / false kilogolása
    // console.log(index === 1);

    // Indexet elosztja 2-vel, a maradékokat kilogolja
    // console.log(index % 2);

    // If statement (feltétel: ha index osztva 2-vel = 0, akkor ez a blokk fut le)
    if (index % 2 === 0){

      // Ha a fekltétel teljesül, akor ez a trueClass rákerül az adott elemre
      fruitDivs[index].classList.add("trueClass");

    } else if (index % 5 === 0) { // Ha az előző feltétel nem teljesül, akkor az 5-tel oszthatóság feltételt vizsgálja, ha igaz, ez a blokk fut le

      // Ha ez a fekltétel teljesül, akor ez az anotherClass rákerül az adott elemre
      fruitDivs[index].classList.add("anotherClass");

    } else { // Ha az előző feltételek nem teljesülnek, akkor ez a blokk fut le
      
      // Ha ez a fekltétel teljesül, akor ez a falseClass rákerül az adott elemre
      fruitDivs[index].classList.add("falseClass");

    }
  }
}

// A pageLoaded függvény meghívása a load eseménykor
window.addEventListener("load", pageLoaded);
