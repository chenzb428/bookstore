<template>
    <div class="user float-right">
        <p v-if="!user">您好，请&nbsp;<router-link to="login">登录</router-link>&nbsp;或&nbsp;<router-link to="register">注册</router-link></p>
        <p v-else>欢迎您，{{ user.username }}&nbsp;&nbsp;&nbsp;<span class="login-out" @click="loginOut">退出登录</span></p>
    </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';

export default {
    name: 'HeaderUser',
    methods: {
        loginOut() {
            this.$confirm('此操作将退出登录, 是否继续?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => {
                this.deleteUser();
                this.$message({
                    type: 'success',
                    message: '成功退出登录!'
                });
            }).catch(() => {
                        
            });
        },
        ...mapMutations('user', ['deleteUser'])
    },
    computed: {
        ...mapState('user', ['user'])
    }
}
</script>

<style lang="scss" scoped>
.user {
    line-height: 70px;
    font-size: 16px;

    a, .login-out {
        color: red;
    }
    .login-out {
        cursor: pointer;
    }
}
</style>