<template>
    <div class="search">
        <div class="container">
            <h1 class="title">搜索结果</h1>
            <div class="search-box" v-loading="isLoading">
                <h1 class="no-data-tip" v-if="hasBook">没有搜索到匹配的图书！</h1>
                <BooksList :data="searchData" :pageNum="pageNum" :pageSize="pageSize" :total="total"
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
    mounted() {
        setMinHeight('.search-box', 225);
    },
    data() {
        return {
            pageNum: 1,
            pageSize: 2,
            total: 5,
            searchData: {},
            hasBook: false,
            isLoading: false
        }
    },
    methods: {
        getSearchContent(fullPath) {
            this.isLoading = true;
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
                        this.total = result.data.total;
                    }
                    this.isLoading = false;
                }
            }).catch((error) => {
                console.log(error);
            })
        },
        handleSizeChange(selectedSize) {
            this.pageSize = selectedSize;
            //console.log(this.pageSize) //每页下拉显示数据条数
            this.getSearchContent(this.$route.fullPath);
        },
        handleCurrentChange(currentPage) {
            this.pageNum = currentPage;
            //console.log(currentPage) //点击第几页
            this.getSearchContent(this.$route.fullPath)
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