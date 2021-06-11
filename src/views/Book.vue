<template>
    <div class="book">
        <div class="container">
            <div class="book-box" v-loading="isLoading">
                <Top :data="bookData" />
                <div class="buy">
                    <Calculator :item="bookData" />
                </div>
                <Tab :data="bookData" />
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex';

import api from '../services';
import { setMinHeight } from '../libs/utils';

import Top from '../components/Book/Top';
import Calculator from '../components/Book/CalculatorBuyBtn';
import Tab from '../components/Book/Tab';

export default {
    name: 'BookPage',
    components: {
        Top,
        Calculator,
        Tab
    },
    beforeRouteEnter(to, from, next) {
        next(vm => {
            vm.getBook(to.fullPath);
        });
    },
    data() {
        return {
            bookData: {},
            isLoading: false
        }
    },
    mounted() {
        setMinHeight('.book-box', 161);
    },
    methods: {
        getBook(fullPath) {
            this.isLoading = true;
            api.getBook(fullPath).then((result) => {
                this.bookData = result.data;
                this.isLoading = false;
            }).catch((error) => {
                console.log(error);
            });
        }
    },
    computed: {
        ...mapState('cart', ['bookCartData'])
    }
}
</script>

<style lang="scss" scoped>
.book {
    .book-box {
        .buy {
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
            margin: 30px 0;
        }
    }
}
</style>