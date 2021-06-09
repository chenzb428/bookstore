<template>
    <div class="book-item clear-fix">
        <div class="cover float-left">
            <el-image style="width: 200px; height: 200px" :src="item.bigImgUrl"></el-image>
        </div>
        <div class="content float-left">
            <router-link class="titile" :to="`/book/${item.id}`" target="_blank">
                {{ item.title }}
            </router-link>
            <div class="price">
                <span>优惠价：{{ item.price | factPrice(item.discount) | currency }}</span>
                <span>{{ item.price | currency }}</span>
            </div>
            <div class="info">
                <div class="author">
                    <span>{{ item.author }}</span>&nbsp;/&nbsp;
                    <span>{{ item.publishDate }}</span>&nbsp;/&nbsp;
                    <span>{{ item.bookConcern }}</span>
                </div>
                <p class="book-info">
                    {{ item.brief }}
                </p>
            </div>
            <AddCartButton type="PLUS" :item="item" />
        </div>
    </div>
</template>

<script>
export default {
    name: 'CategoryBookItem',
    props: {
        item: Object
    }
}
</script>

<style lang="scss" scoped>
.book-item {
    position: relative;
    margin: 10px 0;
    padding: 10px;
    background-color: #fff;
    box-shadow: 0 5px 10px #d4d4d4;
    overflow: hidden;

    .cover {
        width: 200px;
    }
    .content {
        width: 910px;
        margin-left: 10px;

        .titile {
            font-size: 20px;

            &:hover {
                color: red;
                text-decoration: underline;
            }
        }
        .price {
            margin: 20px 0;

            span:first-child {
                font-size: 18px;
                color: red;
            }
            span:last-child {
                margin-left: 20px;
                text-decoration: line-through;
                font-size: 14px;
                color: #999;
            }
        }
        .info {
            line-height: 40px;

            .book-info {
                text-indent: 2em;
                line-height: 20px;
            }
        }
        .addCartButton {
            position: absolute;
            bottom: 10px;
            right: 10px;
        }
    }
}
</style>