<template>
    <div class="calculator">
        <el-button size="mini" @click="setCartItem(id, price, 'PLUS')">+</el-button>
        <span>{{ totalMount }}</span>
        <el-button size="mini" @click="setCartItem(id, price, 'MINUS')">-</el-button>
    </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
    name: 'CartCalculator',
    props: {
        id: Number,
        price: Number,
        totalMount: Number
    },
    methods: {
        setCartItem(id, price, type) {
            this.setTotal({
                type,
                price
            });

            this.setCart({
                id,
                price,
                type
            });
        },
        ...mapActions('cart',['setTotal', 'setCart', 'delCart'])
    }
}
</script>

<style lang="scss" scoped>
.calculator {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;

    span {
    display: inline-block;
    width: 30px;
    height: 30px;
    line-height: 30px;
    text-align: center;
    }
}
</style>