<template>
    <div class="home-center float-left">
        <el-carousel trigger="click">
            <el-carousel-item v-for="item in 2" :key="item">
                <el-image style="width: 100%; height: 100%" :src="require(`@/assets/images/ad0${item}.jpg`)" fit=""></el-image>
            </el-carousel-item>
        </el-carousel>
    </div>
</template>

<script>
export default {
    name: 'HomeTopCenter'
}
</script>

<style lang="scss" scoped>
.home-center {
    width: 520px;
    margin: 0 10px;
}
</style>