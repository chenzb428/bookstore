<template>
    <div class="home-left float-left">
        <h1 class="title">图书分类</h1>
        <div class="content" v-for="(item, index) of data" :key="index">
            <h2 class="book-category">{{ item.name }}</h2>
            <router-link class="book-name" v-for="(child, index2) of item.children" :key="index2" :to="`/category/${child.id}`">{{ child.name }}</router-link>
        </div>
    </div>
</template>

<script>
export default {
    name: 'HomeTopLeft',
    props: {
        data: Array
    }
}
</script>

<style lang="scss" scoped>
.home-left {
    width: 300px;
    height: 300px;

    .title {
        margin: 30px 0;
        font-size: 18px;
        font-weight: 600;
        text-align: center;
    }

    .content {
        padding: 10px;

        .book-category {
            margin-bottom: 20px;
            font-size: 14px;
            text-align: center;
        }
        .book-name {
            margin: 0 10px;
            line-height: 40px;
            font-size: 18px;

            &:hover {
                color: red;
                text-decoration: underline;
            }
        }
    }
}
</style>