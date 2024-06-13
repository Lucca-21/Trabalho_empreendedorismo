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
    location.replace("/Pages/produtos/produto1.html")
}
function produto2() {
    location.replace("/Pages/produtos/produto2.html")
}
function produto3() {
    location.replace("/Pages/produtos/produto3.html")
}
function produto4() {
    location.replace("/Pages/produtos/produto4.html")
}
function produto5() {
    location.replace("/Pages/produtos/produto5.html")
}
function produto6() {
    location.replace("/Pages/produtos/produto6.html")
}
function produto7() {
    location.replace("/Pages/produtos/produto7.html")
}
function produto8() {
    location.replace("/Pages/produtos/produto8.html")
}
function produto9() {
    location.replace("/Pages/produtos/produto9.html")
}