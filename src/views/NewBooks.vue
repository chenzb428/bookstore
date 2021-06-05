<template>
    <div class="new-books">
        <div class="container">
            <BookList :data="booksData" />
        </div>
    </div>
</template>

<script>
import api from '../services';

import BookList from '../components/BooksList';

export default {
    name: 'NewBooksPage',
    components: {
        BookList
    },
    data() {
        return {
            booksData: []
        }
    },
    async mounted() {
        await api.getBooks().then((result) => {
            if (result.status === 200) {
                this.booksData = result.data;
            }
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