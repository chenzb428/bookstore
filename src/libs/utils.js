function setMinHeight(el, height) {
    let oBox = document.querySelector(el);
    oBox.style.minHeight = (document.documentElement.clientHeight - height) + 'px';
}

export {
    setMinHeight
}