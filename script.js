import  "./style.scss";
loadJSON();
document.querySelector(".buttonNext").addEventListener("click",showPt2);

$('.gameType select').multiSelect();

function showPt2 () {
    console.log("haha");
    document.querySelector(".userInfo").classList.add("hide");
    document.querySelector("#gameInfo").classList.remove("hide");
    document.querySelector("#previousB").addEventListener("click",backPt1);

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


