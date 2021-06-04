function factPrice(value, discount) {
    value = parseFloat(value);
    discount = parseFloat(discount);

    if (!discount) {
        return value;
    }

    return value * discount;
}

function currency(value, currency, decimals) {
    value = parseFloat(value);

    if (!isFinite(value) || (!value && value !== 0)) {
        return ''
    }

    currency = currency != null ? currency : '￥';
    decimals = decimals != null ? decimals : 2;

    let stringified = Math.abs(value).toFixed(decimals),
        _int = decimals ? stringified.slice(0, -1 - decimals) : stringified,
        i = _int.length % 3,
        head = i > 0 ? (_int.slice(0, i) + (_int.length > 3 ? ',' : '')) : '',
        _float = decimals ? stringified.slice(-1 -decimals) : '',
        sign = value < 0 ? '-' : ''
    
    return sign + currency + head + _int.slice(i).replace(/(\d{3})(?=\d)/g, '$1,') + _float;
}

function formatTime(value){
    return value.toLocaleString().replace(/T/g, ' ').replace(/\.[\d]{3}Z/, '');
}

export {
    factPrice,
    currency,
    formatTime
}