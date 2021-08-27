// Carne - 500 gr por homem + de 6 horas - 750 gr
// Carne - 400 gr por mulher + de 6 horas - 600 gr
// 200g de picanha ou 200g de fraldinha + 6 horas - 280gr
// 120g de tulipa de frango + 6 horas - 180gr
// 90g de linguiça + 6 horas 120g
// 90g de coração de frango + 6 horas 170gr

// Cerveja - 1200 ml por pessoa + de 6 horas - 2000 ml
// Refrigerante/água - 1000 ml por pessoa + 6 horas 1500ml

// Crianças vale por 0,5




let inputAdultosHomens = document.getElementById("adultoshomens");
let inputAdultosMulheres = document.getElementById("adultosmulheres");
let inputCriancas = document.getElementById("criancas");
let inputDuracao = document.getElementById("duracao");

let resultado = document.getElementById("resultado")


function totalDeAdultos() {



}

function calcular() {

    let adultoshomens = inputAdultosHomens.value;
    let adultosmulheres = inputAdultosMulheres.value;
    let criancas = inputCriancas.value
    let duracao = inputDuracao.value

    
    let qdtTotalPicanha = picanhaPH(duracao) * adultoshomens + picanhaPM() * adultosmulheres + picanhaPH(duracao) / 2 * criancas;
    console.log(qdtTotalPicanha);

    let qdtTotalTulipa = tulipaPH(duracao) * adultoshomens + tulipaPM() * adultosmulheres + tulipaPH(duracao) / 2 * criancas;
    console.log(qdtTotalTulipa);

    let qdtTotalLinguica = linguicaPH(duracao) * adultoshomens + linguicaPM() * adultosmulheres + linguicaPH(duracao) / 2 * criancas;
    console.log(qdtTotalLinguica);

    let qdtTotalCoracao = coracaoPH(duracao) * adultoshomens + coracaoPM() * adultosmulheres + coracaoPH(duracao) / 2 * criancas;
    console.log(qdtTotalCoracao);

    let qdtTotalCarne = qdtTotalPicanha + qdtTotalTulipa + qdtTotalLinguica + qdtTotalCoracao;
    console.log(qdtTotalCarne)

    let qdtTotalCerveja = cervejaPH(duracao) * adultoshomens + cervejaPM(duracao) * adultosmulheres;
    console.log(qdtTotalCerveja);

    let qdtTotalBebidas = bebidasPP(duracao) * adultoshomens + bebidasPP(duracao) * adultosmulheres + bebidasPP(duracao) / 2 * criancas;
    console.log(qdtTotalBebidas);


    resultado.innerHTML = `<h1>Você precisara de um total de ${qdtTotalCarne / 1000} kg de carne </h1>`
    resultado.innerHTML += `<p>${qdtTotalPicanha / 1000} kg de fraldinha ou picanha</p>`
    resultado.innerHTML += `<p>${qdtTotalTulipa / 1000} kg de tulipa de frango</p>`
    resultado.innerHTML += `<p>${qdtTotalLinguica / 1000} kg de Linguiça Toscana ou Cubaiana</p>`
    resultado.innerHTML += `<p>${qdtTotalCoracao / 1000} kg de Coração de frango</p>`
    resultado.innerHTML += `<p>${Math.ceil(qdtTotalCerveja / 355)} latas de cerveja</p>`
    resultado.innerHTML += `<p>${Math.ceil(qdtTotalBebidas / 2000)} garrafas de bebida ( Água ou Refrigerante)</p>`

}



function picanhaPH(duracao) {

    if (duracao >= 6) {
        return 280
    } else {
        return 200
    }

}
function picanhaPM(duracao) {

    if (duracao >= 6) {
        return 250
    } else {
        return 150
    }

}

function tulipaPH(duracao) {

    if (duracao >= 6) {
        return 180
    } else {
        return 120
    }

}
function tulipaPM(duracao) {

    if (duracao >= 6) {
        return 120
    } else {
        return 80
    }

}

function linguicaPH(duracao) {

    if (duracao >= 6) {
        return 120
    } else {
        return 90
    }

}
function linguicaPM(duracao) {

    if (duracao >= 6) {
        return 115
    } else {
        return 85
    }

}

function coracaoPH(duracao) {

    if (duracao >= 6) {
        return 120
    } else {
        return 90
    }

}
function coracaoPM(duracao) {

    if (duracao >= 6) {
        return 115
    } else {
        return 85
    }

}


// function carnePH(duracao) {

//     if (duracao >= 6) {
//         return 750
//     } else {
//         return 500
//     }

// }

// function carnePM(duracao) {

//     if (duracao >= 6) {
//         return 600
//     } else {
//         return 400
//     }

// }

function cervejaPH(duracao) {

    if (duracao >= 6) {
        return 2000
    } else {
        return 1200
    }

}

function cervejaPM(duracao) {

    if (duracao >= 6) {
        return 2000
    } else {
        return 1200
    }

}

function bebidasPP(duracao) {

    if (duracao >= 6) {
        return 1500
    } else {
        return 1000
    }

}
