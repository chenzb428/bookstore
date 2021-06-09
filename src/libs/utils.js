function setMinHeight(el, height) {
    let oBox = document.querySelector(el);
    oBox.style.minHeight = (document.documentElement.clientHeight - height) + 'px';
}

function setCartStorage(data) {
    const { bookTotalPrice, bookTotalMount, bookCartData } = data;

    localStorage.setItem('bookTotalPrice', bookTotalPrice);
    localStorage.setItem('bookTotalMount', bookTotalMount);
    localStorage.setItem('bookCartData', JSON.stringify(bookCartData));
}

export {
    setMinHeight,
    setCartStorage
}