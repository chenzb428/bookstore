<template>
    <div class="header">
        <div class="container">
            <Logo />
            <SearchInput />
            <Cart />
            <User />
        </div>
    </div>
</template>

<script>
import Logo from './Logo';
import SearchInput from './SearchInput';
import Cart from './Cart';
import User from './User';

export default {
    name: 'MyHeader',
    components: {
        Logo,
        SearchInput,
        Cart,
        User
    }
}
</script>

<style lang="scss" scoped>
.header {
    height: 70px;
    background-color: #fff;
    box-shadow: 0 5px 10px #d4d4d4;
}
</style>