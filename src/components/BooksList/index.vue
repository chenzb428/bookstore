<template>
    <div class="new-books">
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

<style>

</style>