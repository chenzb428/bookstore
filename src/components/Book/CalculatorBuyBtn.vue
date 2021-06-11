<template>
    <div class="book-calculator">
        <el-button size="mini" @click="setCartItem('PLUS')">+</el-button>
        <input size="small" readyonly v-model="totalMount" />
        <el-button size="mini" @click="setCartItem('MINUS')">-</el-button>
        <el-button class="addCartButton" type="danger" @click="addToCart">
            加入购物车
        </el-button>
    </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
    name: 'BookCalculator',
    props: {
        item: Object
    },
    data() {
        return {
            totalMount: 1
        }
    },
    methods: {
        setCartItem(type) {
            switch (type) {
                case 'PLUS':
                    this.totalMount ++;
                    break;
                case 'MINUS':
                    this.totalMount --;
                    if (this.totalMount <= 0) {
                        this.totalMount = 1;
                    }
                    break;
                default:
                    break
            }
        },
        addToCart() {
            const {
                id,
                title,
                imgUrl,
                discount,
                price
            } = this.item;
            
            this.setTotal({
                type: 'PLUS',
                price: discount * price,
                totalMount: Number(this.totalMount)
            });

            this.setCart({
                type: 'PLUS',
                id,
                title,
                img: imgUrl,
                price: discount * price,
                totalMount: Number(this.totalMount),
                totalPrice: this.totalMount * price
            });
        },
        ...mapActions('cart', ['setTotal', 'setCart'])
    }
}
</script>

<style lang="scss" scoped>
.book-calculator     {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;

    input {
        width: 30px;
        margin: 0 10px;
        text-align: center;
    }
}
</style>