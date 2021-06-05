<template>
    <div class="category">
        <div class="container">
            <h1 class="title">图书分类</h1>
            <div class="category-box" v-loading="isLoading">
                <h1 class="no-data-tip" v-if="hasBook">当前分类下没有图书！</h1>
                <BooksList :data="ContentData" />
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
        this.getCategoryContent(to.fullPath);
        next();
    },
    mounted() {
        setMinHeight('.category-box', 205);
    },
    data() {
        return {
            pageNum: 1,
            pageSize: 2,
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
                        }
                    }
                    this.isLoading = false;
                }).catch((error) => {
                    console.log(error);
                })
            }
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