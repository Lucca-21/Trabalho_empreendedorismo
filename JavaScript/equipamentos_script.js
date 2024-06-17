document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('opçao1').onclick = function() {
        mostrarSecao('produtos_A');
    };

    document.getElementById('opçao2').onclick = function() {
        mostrarSecao('produtos_B');
    };

    document.getElementById('opçao3').onclick = function() {
        mostrarSecao('produtos_C');
    };
});

function mostrarSecao(secaoId) {
    const secoes = document.querySelectorAll('.display_flex_4');
    secoes.forEach(secao => {
        if (secao.id !== secaoId) {
            secao.classList.add('visibility_off');
        } else {
            secao.classList.remove('visibility_off');
        }
    });
}

/* ---------------------- botões ------------------------ */

function produto1() {
    location.replace("./produtos/produto1.html")
}
function produto2() {
    location.replace("./produtos/produto2.html")
}
function produto3() {
    location.replace("./produtos/produto3.html")
}
function produto4() {
    location.replace("./produtos/produto4.html")
}
function produto5() {
    location.replace("./produtos/produto5.html")
}
function produto6() {
    location.replace("./produtos/produto6.html")
}
function produto7() {
    location.replace("./produtos/produto7.html")
}
function produto8() {
    location.replace("./produtos/produto8.html")
}
function produto9() {
    location.replace("./produtos/produto9.html")
}
