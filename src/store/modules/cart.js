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
        const { type, price } = payload;

        switch (type) {
            case 'PLUS':
                state.bookTotalPrice += price;
                state.bookTotalMount += 1;
                break;
            case 'MINUS':
                state.bookTotalPrice -= price;
                state.bookTotalMount -= 1;
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
            price
        } = payload;

        const index = state.bookCartData.findIndex(item => item.id === id);

        if (index === -1) {
            state.bookCartData.push({
                type,
                id,
                title,
                img,
                price,
                totalMount: 1,
                totalPrice: price
            });
        } else {
            switch (type) {
                case 'PLUS':
                    state.bookCartData[index].totalMount += 1;
                    state.bookCartData[index].totalPrice += price;
                    break;
                case 'MINUS':
                    state.bookCartData[index].totalMount -= 1;
                    state.bookCartData[index].totalPrice -= price;

                    if (!state.bookCartData[index].totalMount) {
                        state.bookCartData = state.bookCartData.filter(item => item.id !== id);
                    }
                    break;
                default:
                    break;
            }
        }
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
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}