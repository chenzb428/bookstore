<template>
    <div class="new-books">
        <h1 class="title">新书上市</h1>
        <BookItem v-for="(item, index) of data" :key="index" :item="item" />
    </div>
</template>

<script>
import BookItem from "./Item";

export default {
    name: 'NewBooks',
    props: {
        data: Array
    },
    components: {
        BookItem
    }
}
</script>

<style lang="scss" scoped>
.new-books {
    .title {
        margin: 10px 0 30px;
        text-align: center;
        font-size: 20px;
        font-weight: 600;
    }
}
</style>