<template>
    <el-button class="addCartButton" type="danger" @click="addToCart(item, type)">
        加入购物车
    </el-button>
</template>

<script>
import { mapActions } from 'vuex';

export default {
    name: 'AddCartButton',
    props: {
       type: String,
       item: Object
    },
    methods: {
        addToCart(data, type) {
            this.setTotal({
                type,
                price: data.discount * data.price
            });

            this.setCart({
                type,
                id: data.id,
                title: data.title,
                img: data.imgUrl,
                price: data.discount * data.price
            });
        },
        ...mapActions('cart', ['setTotal', 'setCart'])
    }
}
</script>

<style>

</style>