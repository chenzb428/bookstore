<template>
    <div class="nav-item float-left">
        <router-link :to="item.path">{{ item.title }}</router-link>
    </div>
</template>

<script>
export default {
    name: 'NavItem',
    props: {
        item: Object
    }
}
</script>

<style lang="scss" scoped>
.nav-item {
    width: 228px;
    height: 50px;
    line-height: 50px;
    font-size: 16px;
    text-align: center;
    
    a {
        display: block;
        height: 50px;
        color: #999;

        &:hover {
            background-color: rgba(0,0,0,.03922);
            transition: all .3s;
        }
    }
    .router-link-active {
        color: #255f9e;
        border-bottom: 2px solid #255f9e;
    }
}
</style>