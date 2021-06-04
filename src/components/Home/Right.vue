<template>
    <div class="home-right float-left">
        <h1 class="title">热门推荐</h1>
        <div class="content" v-for="(item, index) of data" :key="index">
            <router-link class="book" :to="`/category/${item.id}`">
                {{ item.title }} <span class="price">{{ item.price | factPrice(item.discount) | currency }}</span>
            </router-link>
        </div>
    </div>
</template>

<script>
export default {
    name: 'HomeTopRight',
    props: {
        data: Array
    }
}
</script>

<style lang="scss" scoped>
.home-right {
    width: 300px;

    .title {
        margin: 30px 0;
        font-size: 18px;
        font-weight: 600;
        text-align: center;
    }

    .content {
        
        .book {
            margin: 0 10px;
            line-height: 40px;
            font-size: 18px;

            .price {
                font-size: 14px;
            }

            &:hover {
                color: red;
                text-decoration: underline;
            }
        }
    }
}
</style>