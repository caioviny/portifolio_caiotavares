/* Função para trocar a imagem principal */
function changeImage(thumbnail) {
    const mainImage = document.getElementById('main-image');
    mainImage.src = thumbnail.src;
}