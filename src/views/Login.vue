<template>
    <div class="login" v-loading="isLoading">
        <div class="container">
            <div class="login-box">
                <el-input v-model="account" placeholder="请输入用户名" type="small"></el-input>
                <el-input v-model="psw" placeholder="请输入密码" type="small" show-password></el-input>
                <el-button type="success" @click="handleLogin">登录</el-button>
            </div>
        </div>
    </div>
</template>

<script>
import api from '../services';
import { setMinHeight } from '../libs/utils';

import { mapMutations } from 'vuex';

export default {
    name: 'LoginPage',
    data() {
        return {
            account: '',
            psw: '',
            isLoading: false
        }
    },
    mounted() {
        setMinHeight('.login-box', 161)
    },
    methods: {
        handleLogin() {
            if (this.checkInput()) {
                this.isLoading = true;
                api.Login({
                    username: this.account,
                    password: this.psw
                }).then((result) => {
                    if (result.data.code === 200) {
                        this.saveUser(result.data.data);
                        if(this.$route.query.redirect){   
                            let redirect = this.$route.query.redirect;
                            //跳转至进入登录页前的路由
                            this.$router.replace(redirect); 
                        }else{
                            // 否则跳转至首页
                            this.$router.replace('/');    
                        }
                        this.$message({
                            type: 'success',
                            message: '登录成功！'
                        });
                    } else if(result.data.code === 500){
                        this.$message({
                            type: 'error',
                            message: '用户登录失败'
                        });
                    } else if(result.data.code === 400){
                        this.$message({
                            type: 'error',
                            message: '用户名或密码错误'
                        });
                    } else {
                        this.$message({
                            type: 'error',
                            message: '登录失败！ ' + result.data.code
                        });
                    }
                    this.isLoading = false;
                }).catch((error) => {
                    this.$message({
                        type: 'error',
                        message: '登录失败！ ' + error
                    });
                    this.isLoading = false;
                })
            }
        },
        checkInput() {
            if (!this.account || !this.psw) {
                this.$message({
                    type: 'error',
                    message: '请输入完整的信息！'
                });
                return false;
            }
            return true;
        },
        ...mapMutations('user', ['saveUser'])
    }
}
</script>

<style lang="scss" scoped>
.login {
    .login-box {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-bottom: 200px;

        .el-input, .el-button {
            width: 300px;
            margin: 10px 0;
        }
    }
}
</style>