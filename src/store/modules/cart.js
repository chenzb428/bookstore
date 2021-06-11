const state = {
    bookTotalPrice: 0,
    bookTotalMount: 0,
    bookCartData: []
}

const mutations = {
    SET_DATA(state, data) {
        const { bookTotalPrice, bookTotalMount, bookCartData } = data;

        state.bookTotalPrice = bookTotalPrice;
        state.bookTotalMount = bookTotalMount;
        state.bookCartData = bookCartData;
    },
    SET_TOTAL(state, payload) {
        const { type, price, totalMount=1 } = payload;

        switch (type) {
            case 'PLUS':
                state.bookTotalPrice += price * totalMount;
                state.bookTotalMount += totalMount;
                break;
            case 'MINUS':
                state.bookTotalPrice -= price * totalMount;
                state.bookTotalMount -= totalMount;
                break;
            default:
                break;
        }
    },
    SET_CART(state, payload) {
        const {
            type,
            id,
            title,
            img,
            price,
            totalMount=1
        } = payload;

        const index = state.bookCartData.findIndex(item => item.id === id);

        if (index === -1) {
            state.bookCartData.push({
                type,
                id,
                title,
                img,
                price,
                totalMount: totalMount,
                totalPrice: totalMount * price
            });
        } else {
            switch (type) {
                case 'PLUS':
                    state.bookCartData[index].totalMount += totalMount;
                    state.bookCartData[index].totalPrice += price * totalMount;
                    break;
                case 'MINUS':
                    state.bookCartData[index].totalMount -= totalMount;
                    state.bookCartData[index].totalPrice -= price * totalMount;

                    if (!state.bookCartData[index].totalMount) {
                        state.bookCartData = state.bookCartData.filter(item => item.id !== id);
                    }
                    break;
                default:
                    break;
            }
        }
    },
    DEL_CART(state, payload) {
        const { id, totalPrice, totalMount } = payload;
        state.bookTotalPrice -= totalPrice;
        state.bookTotalMount -= totalMount;
        state.bookCartData = state.bookCartData.filter(item => item.id !== id);
    },
    PAY_CART(state) {
        state.bookCartData.length = 0;
        state.bookCartData = [];
        state.bookTotalMount = 0;
        state.bookTotalPrice = 0;
    }
}

const actions = {
    setData({ commit }) {
        const bookTotalPrice = Number(localStorage.getItem('bookTotalPrice') || '0'),
              bookTotalMount = Number(localStorage.getItem('bookTotalMount') || '0'),
              bookCartData = JSON.parse(localStorage.getItem('bookCartData') || '[]');
        
        commit('SET_DATA', {
            bookTotalPrice,
            bookTotalMount,
            bookCartData
        });
    },
    setTotal({ commit }, payload) {
        commit('SET_TOTAL', payload);
    },
    setCart({ commit }, payload) {
        commit('SET_CART', payload);
    },
    delCart({ commit }, payload) {
        commit('DEL_CART', payload);
    },
    payCart({ commit }) {
        commit('PAY_CART');
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}