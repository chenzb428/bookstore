<template>
    <div class="search">
        <div class="container">
            <h1 class="title">搜索结果</h1>
            <h1 class="no-data-tip" v-if="hasBook">没有搜索到匹配的图书！</h1>
            <BooksList :data="searchData" />
        </div>
    </div>
</template>

<script>
import api from '../services';

import BooksList from '../components/BooksList';

export default {
    name: 'SearchPage',
    components: {
        BooksList
    },
    beforeRouteEnter(to, from, next) {
        next(vm => {
            vm.getSearchContent(to.fullPath);
        });
    },
    beforeRouteUpdate(to, from, next) {
        this.getSearchContent(to.fullPath);
        next();
    },
    data() {
        return {
            pageNum: 1,
            pageSize: 2,
            searchData: {},
            hasBook: false
        }
    },
    methods: {
        getSearchContent(fullPath) {
            api.getBooksList({
                url: '/api/api' + fullPath + '&',
                pageNum: this.pageNum,
                pageSize: this.pageSize
            }).then((result) => {
                if (result.data.code === 200) {
                    if (result.data.data.length === 0 ) {
                            this.hasBook = true;
                    } else {
                        this.hasBook = false;
                        this.searchData = result.data.data;
                    }
                }
            }).catch((error) => {
                console.log(error);
            })
        }
    }
}
</script>

<style lang="scss" scoped>
.search {
    padding-top: 20px;

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