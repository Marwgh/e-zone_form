import  "./style.scss";
loadJSON();
document.querySelector(".buttonNext").addEventListener("click",showPt2);

function showPt2 () {
    console.log("haha");
    const form = document.querySelector("form");
    if (!form.elements.first_name.checkValidity()) {
        form.elements.first_name.nextElementSibling.classList.remove("hide");
    } else if (!form.elements.last_name.checkValidity()) {
        form.elements.last_name.nextElementSibling.classList.remove("hide");
    } else if (!form.elements.email.checkValidity()) {
        form.elements.email.nextElementSibling.classList.remove("hide");
    } else if (form.elements.password.value===form.elements.repPassword.value & form.elements.password.value!=false) {
        document.querySelector(".userInfo").classList.add("hide");
        document.querySelector("#gameInfo").classList.remove("hide");
        document.querySelector("#previousB").addEventListener("click",backPt1);

    } else {
        form.elements.password.nextElementSibling.classList.remove("hide"); 
    }
    


}

function backPt1 () {
    document.querySelector(".userInfo").classList.remove("hide");
    document.querySelector("#gameInfo").classList.add("hide");
    document.querySelector(".buttonNext").addEventListener("click",showPt2);
}

function loadJSON() {
    console.log("loadJSON");
    fetch("./json/data.json")
    .then(r => r.json())
    .then (jsonData => {
        // loaded --> prepare objects
        console.log(jsonData);
        prepLists(jsonData);
    });
}

function prepLists(jsonData) {
    jsonData.areas.forEach(jsonObject => {
        var newOP = document.createElement("option");
        newOP.textContent =jsonObject;
        document.querySelector(".gameType select").appendChild(newOP);
    });
    jsonData.games.forEach(jsonObject => {
        var newOP = document.createElement("option");
        newOP.textContent =jsonObject;
        document.querySelector(".gameChoice select").appendChild(newOP);
    });
    jsonData.types.forEach(jsonObject => {
        var newOP = document.createElement("option");
        newOP.textContent =jsonObject;
        document.querySelector(".gameImprove select").appendChild(newOP);
    });
}
function post(data) {
const postData = JSON.stringify(data);
      fetch("https://ezone-e0d4.restdb.io/rest/signup-form", {
        method: "post",
        headers: {
          "Content-Type": "application/json; charset=utf-8",
          "x-apikey": "6087cd0428bf9b609975a77f",
          "cache-control": "no-cache",
        },
        body: postData,
      })
        .then((res) => res.json())
        .then((data) => console.log(data));
}

const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
    e.preventDefault();

    // if (!form.elements.title.checkValidity()) {
    //     form.elements.title.nextElementSibling.removeAttribute("hidden");
    //     form.elements.title.focus();
    //   }
    
const onceW = document.querySelector("#onceW");
// const onceM = document.querySelector("#onceM");
const twiceM = document.querySelector("#twiceM");
let infoUpdate = 1;
      if (form.checkValidity()) {
        //   infoupdate
        if(onceW.checked==true) {
            infoUpdate = 1;
        } else if (twiceM.checked==true){
            infoUpdate = 2;
        } else {
            infoUpdate = 3;
        }
        // WE NEED THREE ARRAYS
        // game t c i
        // const gameType = [];
        // const gameTypeEls = document.querySelectorAll("[name=game_type]:checked");
        // gameTypeEls.forEach((el) => gameType.push(el.value));
    
        // console.log(gameType);

        // const gameChoice = [];
        // const gameChoiceEls = document.querySelectorAll("[name=game_choice]:checked");
        // gameChoiceEls.forEach((el) => gameChoice.push(el.value));
    
        // console.log(gameChoice);

        // const gameImprove = [];
        // const gameImproveEls = document.querySelectorAll("[name=game_improve]:checked");
        // gameImproveEls.forEach((el) => gameImprove.push(el.value));
    
        // console.log(gameImprove);

        post({
          first_name: form.elements.first_name.value,
          last_name: form.elements.last_name.value,
          email: form.elements.email.value,
          country: form.elements.country.value,
          password: form.elements.password.value,
          game_type: form.elements.game_type.value,
          game_choice: form.elements.game_choice.value,
          game_improve: form.elements.game_improve.value,
          info_update: infoUpdate,
        });
      }
    });
    document.querySelector("form").setAttribute("novalidate", true);
    