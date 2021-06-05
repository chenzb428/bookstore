<template>
    <div class="register" v-loading="isLoading">
        <div class="container">
            <div class="login-box">
                <div class="account">
                    <el-input v-model="account" placeholder="请输入用户名" type="small"></el-input><span>{{ hasuser }}</span>
                </div>
                <div class="psw">
                    <el-input v-model="psw" placeholder="请输入密码" type="small" show-password></el-input><span>{{ pswStrong }}</span>
                </div>
                <div class="psw2">
                    <el-input v-model="psw2" placeholder="请再次输入密码" type="small" show-password></el-input>
                </div>
                <el-input v-model="phone" placeholder="请输入手机号" type="small"></el-input>
                <el-button type="success" @click="handleRegister">注册</el-button>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import api from '../services';
import { setMinHeight } from '../libs/utils';

import { mapMutations } from 'vuex';

export default {
    name: 'RegisterPage',
    mounted() {
        setMinHeight('.login-box', 161)
    },
    data() {
        return {
            account: '',
            psw: '',
            psw2: '',
            phone: '',
            hasuser: '',
            pswStrong: '',
            isLoading: false
        }
    },
    watch: {
        account(newVal) {
            if (newVal) {
            this.cancelRequest();
            axios.get("/api/api/user/" + newVal, { cancelToken: new axios.CancelToken(cancel => this.cancel = cancel) })
                .then(response => {
                    if (response.data.code == 200) {
                        let isExist = response.data.data;
                        if (isExist) {
                            this.hasuser = "该用户名已经存在";
                        }else{
                            this.hasuser = "";
                        }
                    }
                })
                .catch(error => {
                    if (axios.isCancel(error)) {
                        console.log("请求取消：", error.message);
                    } else {
                        console.log(error);
                    }
                });
            }
        }
    },
    methods: {
        handleRegister() {
            if (this.checkInput()) {
                this.isLoading = true;
                api.Register({
                    username: this.account,
                    password: this.psw,
                    mobile: this.phone
                }).then((result) => {
                    if (result.data.code === 200) {
                        this.isLoading = false;
                        this.saveUser(result.data.data);
                        this.$router.push('/');
                    }
                }).catch((error) => {
                    this.isLoading = false;
                });
            }
        },
        checkInput() {
            if (!this.account || !this.psw || !this.psw2 || !this.phone) {
                this.$message({
                    type: 'error',
                    message: '请输入完整的信息'
                });
                return false;
            }
            if (this.psw !== this.psw2) {
                this.$alert('两次输入的密码不一致！', '提示', {
                    confirmButtonText: '确定'
                });
                return false;
            }
            return true;
        },
        cancelRequest() {
            if (typeof this.cancel === "function") {
                this.cancel("终止请求");
            }
        },
        ...mapMutations('user',['saveUser'])
    }
}
</script>

<style lang="scss" scoped>
.register {
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
        .account, .psw, .psw2 {
            position: relative;

            span {
                position: absolute;
                right: -150px;
                top: 22.5px;
                margin-left: 20px;
                color: red;
            }
        }
    }
}
</style>