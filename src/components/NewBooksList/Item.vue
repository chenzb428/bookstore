<template>
    <router-link class="book-item float-left" :to="`/book/${item.id}`">
        <div class="cover">
            <el-image :src="'/api/' + item.imgUrl"></el-image>
        </div>
        <div class="title">
            <h1>{{ item.title }}</h1>
        </div>
        <div class="price">
            <span>{{ item.price | factPrice(item.discount) | currency }}</span>
            <span>{{ item.price | currency }}</span>
        </div>
    </router-link>
</template>

<script>
export default {
    name: 'BookItem',
    props: {
        item: Object
    }
}
</script>

<style lang="scss" scoped>
.book-item {
    display: block;
    width: 204px;
    margin: 0 10px;
    padding: 10px;
    border: 1px solid #dfdfdf;
    cursor: pointer;

    .cover {
        width: 150px;
        margin: 0 auto;
    }
    .title {
        margin: 15px 0;
        text-align: center;
        font-size: 16px;
    }
    .price {
        text-align: center;
        span:last-child {
            margin-left: 15px;
            text-decoration: line-through;
            color: #999;
        }
    }

    &:hover {
        border-color: red;
    }
}
</style>