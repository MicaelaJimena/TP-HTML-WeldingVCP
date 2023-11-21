// productCard.js
function createProductCard(product) {
    const cardContainer = document.createElement('div');
    cardContainer.classList.add('photo-list-item');

    const productImage = document.createElement('img');
    productImage.classList.add('photo');
    productImage.src = product.image;
    productImage.alt = product.title;

    const productTitle = document.createElement('p');
    productTitle.classList.add('subtitle');
    productTitle.textContent = product.title;

    cardContainer.appendChild(productImage);
    cardContainer.appendChild(productTitle);

    return cardContainer;
}
