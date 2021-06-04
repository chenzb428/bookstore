<template>
    <div class="user float-right">
        <p>您好，请&nbsp;<router-link to="login">登录</router-link>&nbsp;或&nbsp;<router-link to="register">注册</router-link></p>
    </div>
</template>

<script>
export default {
    name: 'HeaderUser'
}
</script>

<style lang="scss" scoped>
.user {
    line-height: 70px;
    font-size: 16px;

    a {
        color: red;
    }
}
</style>