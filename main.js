
function mudarCorTexto()
{
    document.querySelector("#p1").style.color= "green"
}

function mudarCorFundo(){
    document.querySelector("#p2").style.background= "purple"
}

function alterarTexto(){

    textoForm = document.querySelector("#textinput").value
 
    document.querySelector("#texto2").innerHTML = textoForm

}