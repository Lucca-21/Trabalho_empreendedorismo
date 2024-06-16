/* ------------------------ Redirect */

function protesis_redirect() {
    location.replace("./Pages/protesis.html")
}

/* --------------------------- Change image */

var i = 0;
var images = [];
var urls = [];

images[0] = './Imagens/index_images/imagem_1.jpg';
images[1] = './Imagens/index_images/imagem_2.jpg';
images[2] = './Imagens/index_images/imagem_3.jpg';

urls[0] = './Pages/produtos/produto3.html';
urls[1] = './Pages/produtos/produto6.html';
urls[2] = './Pages/produtos/produto9.html';

function backward() {
    if (i <= 0) {
        i = images.length - 1;
    } else {
        i--;
    }
    document.slide.src = images[i];
}

function forward() {
    if(i >= images.length - 1) {
        i = 0;
    } else {
        i++;
    }
    document.slide.src = images[i];
}

function redirect() {
    window.location.href = urls[i];
}


