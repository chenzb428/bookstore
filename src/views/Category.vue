<template>
    <div class="category">
        <div class="container">
            <h1 class="title">图书分类</h1>
            <div class="category-box" v-loading="isLoading">
                <h1 class="no-data-tip" v-if="hasBook">当前分类下没有图书！</h1>
                <BooksList :data="ContentData" :pageNum="pageNum" :pageSize="pageSize" :total="total"
                           @handleSizeChange="handleSizeChange" @handleCurrentChange="handleCurrentChange" />
            </div>
        </div>
    </div>
</template>

<script>
import api from '../services';
import { setMinHeight } from '../libs/utils';

import BooksList from '../components/BooksList';

export default {
    name: 'CategoryPage',
    components: {
        BooksList
    },
    beforeRouteEnter(to, from, next) {
        next(vm => {
            vm.getCategoryContent(to.fullPath);
        });
    },
    beforeRouteUpdate(to, from, next) {
        if(to.fullPath !== 'cart') {
            getCategoryContent(to.fullPath);
        }
        next();
    },
    mounted() {
        setMinHeight('.category-box', 205);
    },
    data() {
        return {
            pageNum: 1,
            pageSize: 2,
            total: 5,
            ContentData: [],
            hasBook: false,
            isLoading: false
        }
    },
    methods: {
        getCategoryContent(fullPath) {
            this.isLoading = true;
            if (fullPath.indexOf("/category") != -1) {
                api.getBooksList({
                    url: '/api/api/book' + fullPath + '/page?',
                    pageNum: this.pageNum,
                    pageSize: this.pageSize
                }).then((result) => {
                    if (result.data.code === 200) {
                        if (result.data.data.length === 0 ) {
                            this.hasBook = true;
                        } else {
                            this.hasBook = false;
                            this.ContentData = result.data.data;
                            this.total = result.data.total;
                        }
                    }
                    this.isLoading = false;
                }).catch((error) => {
                    console.log(error);
                })
            }
        },
        handleSizeChange(selectedSize) {
            this.pageSize = selectedSize;
            //console.log(this.pageSize) //每页下拉显示数据条数
            this.getCategoryContent(this.$route.fullPath);
        },
        handleCurrentChange(currentPage) {
            this.pageNum = currentPage;
            //console.log(currentPage) //点击第几页
            this.getCategoryContent(this.$route.fullPath)
        }
    }
}
</script>

<style lang="scss" scoped>
.category {
    .container {
        .title {
            margin-bottom: 20px;
            font-size: 24px;
            font-weight: 600;
            text-align: center;
        }
        .no-data-tip {
            text-align: center;
            font-size: 26px;
        }
    }
}
</style>