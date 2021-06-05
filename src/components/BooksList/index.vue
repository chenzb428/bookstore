<template>
    <div class="category-book">
        <BookItem v-for="(item, index) of data" :key="index" :item="item" />
    </div>
</template>

<script>
import BookItem from './Item.vue';

export default {
    name: 'CategoryBookList',
    props: {
        data: Array
    },
    components: {
        BookItem
    }
}
</script>

<style>

</style>