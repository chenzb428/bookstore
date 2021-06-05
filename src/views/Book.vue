<template>
    <div class="book">
        <div class="container">
            <div class="book-box" v-loading="isLoading">
                <Top :data="bookData" />
                <BuyBtn :data="bookData" />
                <Tab :data="bookData" />
            </div>
        </div>
    </div>
</template>

<script>
import api from '../services';
import { setMinHeight } from '../libs/utils';

import Top from '../components/Book/Top';
import BuyBtn from '../components/Book/BuyBtn';
import Tab from '../components/Book/Tab';

export default {
    name: 'BookPage',
    components: {
        Top,
        BuyBtn,
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
    }
}
</script>

<style lang="scss" scoped>

</style>