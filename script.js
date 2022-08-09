
let position = 0;
let count = 0;
let alturaBuraco = 20;
let subidaMinhoca = 5;
let quedaMinhoca = 3;
let tempoSubida;
let tempoQueda;

document.querySelector(".texto p .alturaBuraco").innerHTML = alturaBuraco;
document.querySelector(".texto p .subida").innerHTML = subidaMinhoca;
document.querySelector("p .queda").innerHTML = quedaMinhoca;
document.querySelector(".regua p .alturaBuraco").innerHTML = alturaBuraco;


function redefinirValores() {
    const verifiAlturaBuraco = document.getElementById("alturaBuraco").value;
    const verificaSubida = document.getElementById("subida").value;
    const verificaQueda = document.getElementById("queda").value;

    
    if( !verifiAlturaBuraco || !verificaSubida || !verificaQueda){    
        alert("Defina todos os valores")
    }
    else if(verificaQueda > verificaSubida){
        alert("Subida deve ser mairo que queda");
    }
    else{
        clearInterval(tempoSubida);
        clearTimeout(tempoQueda);
        position = 0;
        count = 0;
        document.getElementById("minhoca").style.bottom = 0;
    
        document.querySelector(".fimBuraco").classList.remove("active")
        document.querySelector(".meioBuraco").classList.remove("active")
    
        alturaBuraco = document.getElementById("alturaBuraco").value;
        subidaMinhoca = document.getElementById("subida").value;
        quedaMinhoca = document.getElementById("queda").value;
    
        document.querySelector(".texto p .alturaBuraco").innerHTML = alturaBuraco;
        document.querySelector("p .subida").innerHTML = subidaMinhoca;
        document.querySelector("p .queda").innerHTML = quedaMinhoca;
        document.querySelector(".regua p .alturaBuraco").innerHTML = alturaBuraco;
    }
}

function iniciar() {
    if (position > 0) {
        clearInterval(tempoSubida);
        clearTimeout(tempoQueda);
        position = 0;
        count = 0;
        document.getElementById("minhoca").style.bottom = 0;
        document.querySelector(".fimBuraco").classList.remove("active")
        document.querySelector(".meioBuraco").classList.remove("active")
    }

    tempoSubida = setInterval(() => {
        count += 1
        position = position + (subidaMinhoca) * (60 / alturaBuraco);
        document.getElementById("minhoca").style.bottom = position + "vh";

        tempoQueda = setTimeout(() => {
            position = position - (quedaMinhoca) * (60 / alturaBuraco);
            document.getElementById("minhoca").style.bottom = position + "vh";
        }, 400)

        if (position >= 30 && position < 60) {
            console.log(count)
            document.querySelector(".meioBuraco").classList.add("active")
            document.querySelector(".meioBuraco span").innerHTML = count
        }

        if (position > 60) {
            document.querySelector(".fimBuraco").classList.add("active")
            document.querySelector(".fimBuraco span").innerHTML = count
            document.querySelector(".meioBuraco").classList.remove("active")
            clearInterval(tempoSubida);
            clearTimeout(tempoQueda);
        }
    }, 1000);
}