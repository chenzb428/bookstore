<template>
    <div class="category-book">
        <BookItem v-for="(item, index) of data" :key="index" :item="item" />

        <el-pagination
            :hide-on-single-page="true"
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="pageNum"
            :page-sizes="[2, 10, 20, 40]"
            :page-size="pageSize"
            layout="total, sizes, prev, pager, next, jumper"
            :total="total">
        </el-pagination>
    </div>
</template>

<script>
import BookItem from './Item.vue';

export default {
    name: 'CategoryBookList',
    props: {
        data: Array,
        pageNum: Number,
        pageSize: Number,
        total: Number
    },
    components: {
        BookItem
    },
    methods: {
        handleSizeChange(selectedSize) {
            this.$emit('handleSizeChange', selectedSize);
        },
        handleCurrentChange(currentPage) {
            this.$emit('handleCurrentChange', currentPage);
        }
    }
}
</script>

<style>

</style>