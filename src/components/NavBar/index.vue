<template>
    <div class="nav">
        <div class="container">
            <NavItem v-for="(item, index) of navData" :key="index" :item="item" />
        </div>
    </div>
</template>

<script>
import navData from '../../data/nav';

import NavItem from './Item';

export default {
    name: 'NavBar',
    components: {
        NavItem
    },
    data() {
        return {
            navData
        }
    }
}
</script>

<style lang="scss" scoped>
.nav {
    margin: 20px 0;

    .container {
        height: 50px;
        background-color: #fff;
        box-shadow: 0 5px 10px #d4d4d4;
    }
}
</style>