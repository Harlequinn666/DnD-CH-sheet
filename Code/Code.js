function handleSubmit(e)
{
    e.preventDefault();
    let chosenName = document.querySelector("#name-imput").value
    document.querySelector("#name-output").innerHTML = chosenName
    
    let userName = document.querySelector("#name-imput").value;
    console.log(userName);
    document.querySelector("#sheet").classList.remove("hide");

}


function Classselection(){
    let selectedclass = document.querySelector("#Classselector").value;
    if(selectedclass == "mage"){
        document.querySelector("#Choosespells").classList.remove("hide");
    }
}

