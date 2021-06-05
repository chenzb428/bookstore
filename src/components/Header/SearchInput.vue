<template>
    <div class="search-input float-left">
        <el-input class="input" size="small" v-model="inputValue"></el-input>
        <router-link :to="{name: 'search', query: {wd: inputValue}}">搜索</router-link>
    </div>
</template>

<script>
export default {
    name: 'HeaderSearchInput',
    data() {
        return {
            inputValue: ''
        }
    }
}
</script>

<style lang="scss" scoped>
.search-input {
    margin-left: 150px;
    line-height: 70px;

    .input {
        width: 300px;
        margin-right: 20px;
    }
    a {
        display: inline-block;
        width: 70px;
        height: 32px;
        line-height: 1;
        white-space: nowrap;
        cursor: pointer;
        background: red;
        border: 1px solid red;
        color: #fff;
        -webkit-appearance: none;
        text-align: center;
        box-sizing: border-box;
        outline: 0;
        margin: 0;
        transition: .1s;
        font-weight: 500;
        padding: 8px 20px;
        font-size: 13px;
        border-radius: 4px;

        &:active {
            background-color: #F56C6C;
            border-color: #F56C6C;
        }
    }
}
</style>