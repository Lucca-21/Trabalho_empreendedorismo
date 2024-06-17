document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('produto1').onclick = function() {
        mostrarSecao('sobre_A');
    };

    document.getElementById('produto2').onclick = function() {
        mostrarSecao('sobre_B');
    };

    document.getElementById('produto3').onclick = function() {
        mostrarSecao('sobre_C');
    };
});

function mostrarSecao(secaoId) {
    const secoes = document.querySelectorAll('.display_flex_colum');
    secoes.forEach(secao => {
        if (secao.id !== secaoId) {
            secao.classList.add('visibility_off');
        } else {
            secao.classList.remove('visibility_off');
        }
    });
}

/* ------------------ buttons -------------------- */

function produto1() {
    location.replace("./produtos/produto3.html")
}
function produto2() {
    location.replace("./produtos/produto6.html")
}
function produto3() {
    location.replace("./produtos/produto9.html")
}