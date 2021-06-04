<template>
    <div class="home">
        <div class="container">
            Home Page
        </div>
    </div>
</template>

<script>
import api from '../services';

export default {
    name: 'HomePage',
    async mounted() {
        await api.getCategory().then((result) => {
            console.log(result);
        })
    }
}
</script>

<style lang="scss" scoped>
.home {
    padding-top: 20px;
}
</style>