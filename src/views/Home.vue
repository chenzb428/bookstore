<template>
    <div class="home">
        <div class="container">
            <div class="top">
                <Left :data="categoryData" />
                <Center />
                <Right :data="booksData" />
            </div>
            <div class="bottom">
                <BookList :data="booksData" />
            </div>
        </div>
    </div>
</template>

<script>
import api from '../services';

import Left from '../components/Home/Left';
import Center from '../components/Home/Center';
import Right from '../components/Home/Right';
import BookList from '../components/NewBooksList';

export default {
    name: 'HomePage',
    components: {
        Left,
        Center,
        Right,
        BookList
    },
    data() {
        return {
            categoryData: [],
            booksData: []
        }
    },
    async mounted() {
        await api.getCategory().then((result) => {
            if (result.status === 200) {
                this.categoryData = result.data;
            }
        });
        await api.getBooks().then((result) => {
            if (result.status === 200) {
                this.booksData = result.data;
            }
        });
    }
}
</script>

<style lang="scss" scoped>
.home {
    .container {
        .top {
            background-color: #fff;
            box-shadow: 0 5px 10px #d4d4d4;
            overflow: hidden;
        }
        .bottom {
            @extend .top;
            margin-top: 20px;
            padding: 10px;
        }
    }
}
</style>