<template>
    <div class="book-center">
        <el-button type="danger">加入购物车</el-button>
    </div>
</template>

<script>
export default {
    name: 'BookBuyBtn',
    props: {
        data: Object
    }
}
</script>

<style lang="scss" scoped>
.book-center {
    margin: 50px 0;
    text-align: center;
}
</style>