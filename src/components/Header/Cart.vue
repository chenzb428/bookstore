<template>
    <div class="cart float-left">
        <router-link to="cart">购物车&nbsp;&nbsp;{{ bookTotalMount }}</router-link>
    </div>
</template>

<script>
import { mapState } from 'vuex';

import { setCartStorage } from '../../libs/utils';

export default {
    name: 'HeaderCart',
    computed: {
        ...mapState('cart', ['bookTotalMount', 'bookTotalPrice', 'bookCartData'])
    },
    updated() {
        setCartStorage({
            bookTotalMount: this.bookTotalMount,
            bookTotalPrice: this.bookTotalPrice,
            bookCartData: this.bookCartData
        });
    }
}
</script>

<style lang="scss" scoped>
.cart {
    margin-left: 60px;
    line-height: 70px;

    a {
        display: inline-block;
        line-height: 1;
        white-space: nowrap;
        cursor: pointer;
        background: red;
        border: 1px solid red;
        color: #fff;
        -webkit-appearance: none;
        text-align: center;
        box-sizing: border-box;
        outline: 0;
        margin: 0;
        transition: .1s;
        font-weight: 500;
        padding: 12px 20px;
        font-size: 14px;
        border-radius: 4px;

        &:active {
            background-color: #F56C6C;
            border-color: #F56C6C;
        }
    }
}
</style>