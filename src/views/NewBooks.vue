<template>
    <div class="new-books">
        <div class="container">
            <div class="new-books-box" v-loading="isLoading">
                <BookList :data="booksData" />
            </div>
        </div>
    </div>
</template>

<script>
import api from '../services';
import { setMinHeight } from '../libs/utils';

import BookList from '../components/NewBooksList';

export default {
    name: 'NewBooksPage',
    components: {
        BookList
    },
    data() {
        return {
            booksData: [],
            isLoading: false
        }
    },
    async mounted() {
        setMinHeight('.new-books-box', 190);

        this.isLoading = true;
        await api.getHotBook().then((result) => {
            if (result.status === 200) {
                this.booksData = result.data;
            }
            this.isLoading = false;
        }).catch((error) => {
            console.log(error);
        });
    }
}
</script>

<style lang="scss" scoped>
.container {
    width: 1120px;
    padding: 10px;
    background-color: #fff;
    box-shadow: 0 5px 10px #d4d4d4;
    overflow: hidden;
}
</style>