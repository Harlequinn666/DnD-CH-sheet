const pathToMageImage = "images/Mage.png";

function handleSubmit(e)
{
    e.preventDefault();
    
    //    let Choosespells = document.querySelector("#spells").value
    //    let Chooseitem = document.querySelector("#item").value
    //    document.querySelector("#Spell-output").innerHTML = Choosespells
    //    document.querySelector("#Item-output").innerHTML = Chooseitem

    let ChosenName = document.querySelector("#name-input").value
    let ChosenHouse = document.querySelector("#houseselector").value
    let ChosenAge = document.querySelector("#age-input").value
    let ChosenRace = document.querySelector("#Race").value
    let ChosenClass = document.querySelector("#Classselector").value
    
    let outputText = ChosenName + ChosenHouse;
    
    document.querySelector("#name-output").innerHTML = outputText;
    document.querySelector("#age-output").innerHTML = ChosenAge
    document.querySelector("#Race-output").innerHTML = ChosenRace
    document.querySelector("#Class-output").innerHTML = ChosenClass
    
    
    let Equipment = document.querySelector("#equipment").value
    document.querySelector("#equipment-output").innerHTML = Equipment


    let Strength = document.querySelector("#Strength-Stats").value
    let Dexterity = document.querySelector("#Dexterity-Stats").value
    let Intelligence = document.querySelector("#Intelligence-Stats").value
    let Arcane = document.querySelector("#Arcane-Stats").value
    let Cool = document.querySelector("#Cool-Stats").value

    document.querySelector("#Strength-output").innerHTML = Strength
    document.querySelector("#Dexterity-output").innerHTML = Dexterity
    document.querySelector("#Intelligence-output").innerHTML = Intelligence
    document.querySelector("#Arcane-output").innerHTML = Arcane
    document.querySelector("#Cool-output").innerHTML = Cool


    

    

    document.querySelector("#sheet").classList.remove("hide");

    console.log(ChosenName, ChosenHouse);

    
    
    //let chosenNcame = document.querySelector
    
    //let userName = document.querySelector("#name-input").value;
    //console.log(userName);

    //document.querySelector("#house-output").innerHTML = chosenHouse

    //let userHouse = document.querySelector("#houseselector").value;
    //console.log(userHouse);
    //document.querySelector("#sheet").classList.remove("hide");

    //let chosenname = document.querySelector("#name-input").value + " " + document.querySelector("#houseselector").value;
    //document.querySelector("#name-output" + " " + "#house-output").innerHTML = chosenname;

    //let username = document.querySelector("#name-input").value;
    //let userhouse = document.querySelector("#houseselector").value;
    //document.querySelector("#name-output" + " " + "#house-output").innerHTML = chosenname;

    //document.querySelector("#sheet").classList.remove("hide");

}


function Classselection(){          
    let selectedclass = document.querySelector("#Classselector").value;
    if(selectedclass == "Knight"){
        document.querySelector("#Chooseequipment").classList.remove("hide");
        document.getElementById("Knightimage").classList.remove("hide")
    }
    else{
        document.querySelector("#Chooseequipment").classList.add("hide");
        document.getElementById("Knightimage").classList.add("hide")
    }

    if(selectedclass == "Mage"){
        document.querySelector("#Choosespells").classList.remove("hide");
        document.getElementById("Mageimage").classList.remove("hide")
    }
    else{
        document.querySelector("#Choosespells").classList.add("hide");
        document.getElementById("Mageimage").classList.add("hide")
    }

    if(selectedclass == "Assassin"){
        document.querySelector("#Chooseitem").classList.remove("hide");
        document.getElementById("Assassinimage").classList.remove("hide")
    }
    else{
        document.querySelector("#Chooseitem").classList.add("hide");
        document.getElementById("Assassinimage").classList.add("hide")
    }

    if(selectedclass == "Necromancer"){
        document.querySelector("#Choosedeath").classList.remove("hide");
        document.getElementById("Necromancerimage").classList.remove("hide")
    }
    else{
        document.querySelector("#Choosedeath").classList.add("hide");
        document.getElementById("Necromancerimage").classList.add("hide")
    }

    if(selectedclass == "Tamer"){
        document.querySelector("#ChoosePet").classList.remove("hide");
        document.getElementById("Tamerimage").classList.remove("hide")
    }
    else{

        document.querySelector("#ChoosePet").classList.add("hide");
        document.getElementById("Tamerimage").classList.add("hide")
    }

    if(selectedclass == "Spirtiualist"){
        document.querySelector("#ChooseSpirit").classList.remove("hide");
        document.getElementById("spirtiualistimage").classList.remove("hide")
    }
    else{
        document.querySelector("#ChooseSpirit").classList.add("hide");
        document.getElementById("spirtiualistimage").classList.add("hide")
    }
} 

function houseselection(){
    let selectedclass = document.querySelector("#houseselector").value;
    if(selectedclass == " De Caligo"){
        document.querySelector("#HouseOfDark").classList.remove("hide");
    }
    else{
        document.querySelector("#HouseOfDark").classList.add("hide");
    }
    if(selectedclass == " De Ignis"){
        document.querySelector("#HouseOfFire").classList.remove("hide");
    }
    else{
        document.querySelector("#HouseOfFire").classList.add("hide");
    }
    if(selectedclass == " De Aqua"){
        document.querySelector("#HouseOfWater").classList.remove("hide");
    }
    else{
        document.querySelector("#HouseOfWater").classList.add("hide");
    }
    if(selectedclass == " De Terra"){
        document.querySelector("#HouseOfEarth").classList.remove("hide");
    }
    else{
        document.querySelector("#HouseOfEarth").classList.add("hide");
    }
    if(selectedclass == " De Aeris"){
        document.querySelector("#HouseOfAir").classList.remove("hide");
    }
    else{
        document.querySelector("#HouseOfAir").classList.add("hide");
    }
    if(selectedclass == " De Lux"){
        document.querySelector("#HouseOfLight").classList.remove("hide");
    }
    else{
        document.querySelector("#HouseOfLight").classList.add("hide");
    }
    
}


 

