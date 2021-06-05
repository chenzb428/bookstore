<template>
<div class="comment">
    <h1 class="no-data-tip" v-if="hasComment">当前没有任何评论！</h1>
    <div class="comment-item" v-for="(item, index) of commentData" :key="index">
        <div class="user">
            <span>{{ item.username }}</span>
            <span>{{ item.commentDate }}</span>
        </div>
        <p class="content">{{ item.content }}</p>
    </div>
</div>
</template>

<script>
import api from '../../../services';

export default {
    name: 'BookTabComment',
    mounted() {
        api.getBook(this.$route.path + '/comment').then((result) => {
            if (result.status === 200) {
                if (result.data.length === 0) {
                    this.hasComment = true;
                } else {
                    this.commentData = result.data;
                    this.hasComment = false;
                }
            }
        })
    },
    data() {
        return {
            commentData: [],
            hasComment: false
        }
    }
}
</script>

<style lang="scss" scoped>
.comment {
    padding: 10px;

    .comment-item {
        margin: 10px 0 30px;
        padding: 10px;
        box-shadow: 0 5px 10px #d4d4d4;

        .user {
            span {
                font-size: 18px;

                &:last-child {
                    margin-left: 20px;
                    font-size: 14px;
                }
            }
        }
        .content {
            margin-top: 15px;
        }
    }
}
</style>